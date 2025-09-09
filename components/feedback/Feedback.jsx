import { useState, useEffect, useRef } from "react";
import "./Feedback.scss";
import { VscFeedback } from "react-icons/vsc";

const feedbacks = [
  {
    name: "Anna Santos",
    role: "UI/UX Designer",
    feedback:
      "Working with you was such a smooth experience. You understood design handoffs perfectly and implemented everything pixel-perfect!",
  },
  {
    name: "John Reyes",
    role: "Project Manager",
    feedback:
      "Delivered the web app ahead of schedule and was very responsive to feedback. Highly recommend for fast-paced development cycles.",
  },
  {
    name: "Miguel Cruz",
    role: "Mobile App Developer",
    feedback:
      "Your integration of REST APIs into the Flutter app was seamless. Great attention to detail and clean code!",
  },
  {
    name: "Sarah Dela Peña",
    role: "QA Tester",
    feedback:
      "Very easy to work with! Bugs were fixed quickly and you always kept user experience in mind.",
  },
  {
    name: "Kevin Bautista",
    role: "Full Stack Developer",
    feedback:
      "Your frontend work was top-notch. Clean components, responsive design, and well-documented codebase — excellent work!",
  },
  {
    name: "Leah Mendoza",
    role: "Hackathon Teammate",
    feedback:
      "Handled the Firebase integration like a pro during the 48-hour hackathon. Super reliable under pressure!",
  },
  {
    name: "RJ Navarro",
    role: "Startup Co-Founder",
    feedback:
      "Impressed with your ability to turn rough ideas into functional web features in no time. Great product thinking!",
  },
  {
    name: "Jasmine Ong",
    role: "Mentor & Code Reviewer",
    feedback:
      "Your progress has been amazing. Code quality has improved a lot, and you're not afraid to ask the right questions. Keep going!",
  },
];

function Feedback() {
  const [expanded, setExpanded] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);

  const cardWidth = 310;

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToIndex = (index) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % feedbacks.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    scrollToIndex(prevIndex);
  };

  // Auto-scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Update current index on manual scroll
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const index = Math.round(wrapper.scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    wrapper.addEventListener("scroll", handleScroll);
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="section">
      <h2>
        <VscFeedback className="titleIcon" />
        Feedback
      </h2>

      <div className="cardWrapper" ref={wrapperRef}>
        {feedbacks.map((item, index) => {
          const isLong = item.feedback.length > 100;
          const isExpanded = expanded[index];

          return (
            <div className="card" key={index}>
              <div className="top">
                <span className="name">{item.name}</span>
                <span className="role">{item.role}</span>
              </div>

              <p>
                "
                {isLong && !isExpanded
                  ? item.feedback.slice(0, 100) + "..."
                  : item.feedback}
                "
              </p>

              {isLong && (
                <button
                  className="readMoreBtn"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="dots">
        {feedbacks.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
