import { GoProjectSymlink } from "react-icons/go";
import "./CertAchievement.scss";
import { GrAchievement } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";

const certs = [
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/username/responsive-web-design",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures",
  },
  {
    name: "Front-End Web Developer Nanodegree",
    issuer: "Udacity",
    url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
  },
  {
    name: "The Complete Web Developer Bootcamp",
    issuer: "Udemy",
    url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    name: "Android Basics in Kotlin",
    issuer: "Google Developers",
    url: "https://developer.android.com/courses/pathways/android-basics-kotlin",
  },
  {
    name: "iOS App Development with Swift",
    issuer: "Coursera (University of Toronto)",
    url: "https://www.coursera.org/specializations/app-development",
  },
  {
    name: "React Native - The Practical Guide",
    issuer: "Udemy",
    url: "https://www.udemy.com/course/react-native-the-practical-guide/",
  },
  {
    name: "Full Stack Mobile App Development with Flutter",
    issuer: "Udemy",
    url: "https://www.udemy.com/course/flutter-full-stack-mobile-app-development/",
  },
  {
    name: "Google IT Automation with Python",
    issuer: "Coursera (Google)",
    url: "https://www.coursera.org/professional-certificates/google-it-automation",
  },
];

const achievements = [
  {
    title: "1st Place - HackFest 2024",
    event: "HackFest by DevCon PH",

    year: 2024,
    url: "https://devcon.ph/hackfest2024",
  },
  {
    title: "Top 10 Finalist - Google Solution Challenge",
    event: "Google Developers",

    year: 2023,
    url: "https://developers.google.com/community/gdsc-solution-challenge",
  },
  {
    title: "Champion - University Coding Cup",
    event: "XYZ University",

    year: 2023,
    url: "",
  },
  {
    title: "Best UI/UX Design",
    event: "Reactathon Hackathon",

    year: 2024,
    url: "https://reactathon.com/hackathon",
  },
  {
    title: "2nd Place - Mobile App Pitch",
    event: "Startup Weekend Cebu",

    year: 2022,
    url: "https://startupweekend.org/",
  },
  {
    title: "Finalist - Flutter Forward Challenge",
    event: "Google Developers",

    year: 2023,
    url: "https://flutter.dev/events/flutter-forward",
  },
  {
    title: "Certificate of Merit - CodeWars",
    event: "StackLeague",

    year: 2024,
    url: "https://stackleague.com",
  },
  {
    title: "Top 5 - UI Design Sprint",
    event: "Figma Community Challenge",

    year: 2023,
    url: "",
  },
  {
    title: "Best Use of APIs",
    event: "RapidAPI Hackathon",

    year: 2022,
    url: "https://rapidapi.com/hackathons",
  },
  {
    title: "Best Mobile App Concept",
    event: "DevHack Junior 2021",

    year: 2021,
    url: "",
  },
];

function CertAchievement() {
  return (
    <div className="certAchievement">
      <div className="section">
        <div className="header">
          <h2>
            <LiaCertificateSolid className="titleIcon" />
            Certificates
          </h2>

          <button className="btnAll">All</button>
        </div>

        <div className="cardWrapper">
          {certs.slice(0, 5).map((item, index) => {
            return (
              <div className="card" key={index}>
                <span className="title">{item.name}</span>
                <span className="issuer">{item.issuer}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section">
        <div className="header">
          <h2>
            <GrAchievement className="titleIcon" />
            Achievements
          </h2>

          <button className="btnAll">All</button>
        </div>

        <div className="cardWrapper">
          {achievements.slice(0, 4).map((item, index) => {
            return (
              <div className="card" key={index}>
                <span className="title">{item.title}</span>
                <span className="event">{item.event}</span>
                <span className="year">{item.year}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CertAchievement;
