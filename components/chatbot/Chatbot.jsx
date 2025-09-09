import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.scss";
import ppImage from "../../src/assets/profile (2).jpg";
import { CgClose } from "react-icons/cg";
import { LuRefreshCcw } from "react-icons/lu";
import { RiSendPlane2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

// List of API keys
const apiKeys = [
  import.meta.env.VITE_GEMINI_API_KEY_0,
  import.meta.env.VITE_GEMINI_API_KEY_1,
  import.meta.env.VITE_GEMINI_API_KEY_2,
  import.meta.env.VITE_GEMINI_API_KEY_3,
  import.meta.env.VITE_GEMINI_API_KEY_4,
  import.meta.env.VITE_GEMINI_API_KEY_5,
];

let currentKeyIndex = 0;
function getGenAI() {
  return new GoogleGenerativeAI(apiKeys[currentKeyIndex]);
}

function Chatbot({ close }) {
  const initialMessage = {
    role: "ai",
    text: `Hey there! 👋 I'm Jhon Doe, a Web and Mobile App Developer. Need help with web dev, mobile dev, or anything tech-related? Feel free to ask!`,
  };

  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chat-jhon-messages");
    return stored ? JSON.parse(stored) : [initialMessage];
  });

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const [confirmationModal, setConfirmationModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("chat-jhon-messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (sending || isTyping || !input.trim()) return;

    setSending(true);
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const genAI = getGenAI();

      const textModel = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: `You are Jhon Doe — a professional Web and Mobile App Developer.

You specialize in:
- Web development using Next.js", "Vue.js", "React", "JavaScript", "TypeScript.
- Mobile app development using Flutter and React Native.
- Backend development with Python", "PHP", "Node.js", "Mysql", "PostgreSql", "MongoDB.
- Working with REST APIs, database integration, and full-stack project architecture.

You are currently promoting a portfolio template with an AI chatbot, available for commission.

Here's what users need to know if they’re interested in getting a portfolio from you:

🧾 Portfolio Commission Info:
- You are **open for commissions**.
- To order or inquire, they should **message you on TikTok** (where you promote your services).
- The portfolio is **free-hosted** (e.g. on Netlify) first for testing and review.
- After payment, it will be **deployed to a custom domain** of their choice.
- The buyer must send you the information they want to show on the portfolio — such as name, role, skills, projects, contact details, etc.

🤖 AI Chatbot Personalization:
- The portfolio **includes an integrated AI chatbot**.
- Buyers can **send a custom system instruction** to make the chatbot reflect their business or personal assistant style.
- This makes each portfolio **customized and interactive**.

You should answer questions about:
- Web and mobile development
- How to commission a portfolio
- What features are included in your portfolio offer
- How to personalize the chatbot

Rules:
- Stay professional, friendly, and helpful.
- Do not mention you're an AI — you're Jhon Doe, the developer.
- Redirect off-topic or overly personal questions back to tech-related topics.

You are here to help as Jhon Doe — the Web and Mobile App Developer.`,
      });

      const conversation = messages
        .map(
          (m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text || ""}`
        )
        .join("\n");

      const prompt = `${conversation}\nUser: ${currentInput}\nAssistant:`;

      const result = await textModel.generateContent(prompt);
      const aiResponse = result.response.text();

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);

      if (error.message.includes("429")) {
        if (currentKeyIndex < apiKeys.length - 1) {
          currentKeyIndex++;
          setSending(false);
          return handleSend();
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "ai",
              text: "🚫 All API keys reached their quota. Please try again tomorrow.",
            },
          ]);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: "Sorry, something went wrong. Please try again.",
          },
        ]);
      }
    }

    setIsTyping(false);
    setSending(false);
  };

  const handleRefresh = () => {
    localStorage.removeItem("chat-jhon-messages");
    setMessages([initialMessage]);
    setInput("");
    setConfirmationModal(false);
  };

  const handleClose = () => {
    close();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="chatbot-container"
    >
      <div className="heading">
        <div className="left">
          <img src={ppImage} alt="profile" />
          <div className="nameOnline">
            <span>Chat with Jhon Doe</span>
            <div className="online">
              <span className="dot"></span>
              <span className="labelOnline">Online</span>
            </div>
          </div>
        </div>
        <div className="right">
          <LuRefreshCcw
            onClick={() => setConfirmationModal(true)}
            className="refresh"
          />
          <CgClose onClick={handleClose} className="closeIcon" />
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message-wrapper ${msg.role}`}>
            {msg.role === "ai" && (
              <div className="ai-profile">
                <img className="ai-image" src={ppImage} alt="ai" />
                <span>Jhon</span>
              </div>
            )}
            <div className={`chat-message ${msg.role}`}>
              {msg.text && <p className={`msgPhar ${msg.role}`}>{msg.text}</p>}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message-wrapper ai">
            <div className="ai-profile">
              <img className="ai-image" src={ppImage} alt="ai" />
              <span>Jhon</span>
            </div>
            <div className="chat-message ai typing">
              <div className="dot-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <div className="chat-input-wrapper">
          <input
            type="text"
            value={input}
            placeholder="Ask something..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={sending}
          />
          <RiSendPlane2Fill
            onClick={handleSend}
            className={`sendIcon ${sending ? "disabled" : ""}`}
          />
        </div>
      </div>

      {confirmationModal && (
        <div className="confirmation-overlay">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="confirmation-modal"
          >
            <p>
              Are you sure you want to refresh the chat? This will clear the
              current conversation.
            </p>
            <div className="bottom">
              <button onClick={handleRefresh} className="btn-yes">
                Yes, Refresh
              </button>
              <button
                onClick={() => setConfirmationModal(false)}
                className="btn-no"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Chatbot;
