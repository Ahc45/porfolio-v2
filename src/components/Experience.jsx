import React from "react";
import "./Experience.css";
import TimelineItem from "./TimelineItem";

// Timeline data
const timelineData = [
  {
    id: 1,
    company: "Casting App",
    title: "Software Engineer",
    date: "2024 - Present",
    description:
      "At Casting App, I contributed to a highly collaborative development environment focused on agility and scalability. My key role involved backend infrastructure optimization, building AWS Step Function pipelines, and implementing advanced ETL processes across Lambda, S3, and PostgreSQL. I also fine-tuned React components for performance and seamless user experience.",
  },
  {
    id: 2,
    company: "Mosaic Solutions",
    title: "Software Engineer",
    date: "2023 - 2024",
    description:
      "At Mosaic, I focused on backend engineering and data flow optimization. I engineered performant database schemas, resolved platform-level bugs, and introduced advanced caching strategies to boost system responsiveness. My work also included implementing ETL workarounds and supporting engineering decisions that streamlined system performance.",
  },
  {
    id: 3,
    company: "Partsman PH",
    title: "CTO & Full Stack Developer",
    date: "2022 - 2023",
    description:
      "At Partsman PH, I led the architecture and end-to-end development of a modern e-commerce platform. From translating business requirements into robust solutions to managing both frontend and backend implementations, I was instrumental in transforming platform goals into tangible features. I also oversaw deployment pipelines, database architecture, and developer operations. As CTO, I mentored a team of senior and junior developers to uphold clean code standards, consistency, and delivery timelines.",
  },
  {
    id: 4,
    company: "Nuworks",
    title: "Full Stack Developer",
    date: "2021 - 2023",
    description:
      "At Nuworks, I contributed to multiple high-impact projects in both product innovation and enterprise systems. I led backend services and server ops for stable deployments, and created feature-rich applications like an analytics dashboard and an advanced music-mixing web app. Working with a modern stack, I emphasized system performance, scalability, and user engagement.",
  },

  {
    id: 5,
    company: "KURIN PH",
    title: "Full Stack Developer - (Part-time)",
    date: "2020 - 2021",
    description:
      "I joined Kurin PH as a full-stack consultant to elevate their platform's reliability and scalability. I integrated Xendit for seamless payment processing, streamlined data handling with optimized DB architecture, and led QA testing to ensure reliability across user journeys. Additionally, I provided automation strategy consultation and helped unify marketing tools with the platform.",
  },
  {
    id: 6,
    company: "KYNA TECH",
    title: "Full Stack Developer - (Part-time)",
    date: "2020 - 2021",
    description:
      "At Kyna Technologies, I focused on optimizing backend architecture and spearheaded mobile-first initiatives. My work included designing RESTful APIs, refining database systems, and implementing system-wide performance improvements. I also led the development of cross-platform mobile apps using React Native, helping the company reach new customer touchpoints.",
  },
  {
    id: 7,
    company: "DAY 1 TECH",
    title: "Full Stack Developer",
    date: "2019 - 2021",
    description:
      "At Day 1 Tech Inc, I played a pivotal role in maintaining and scaling the platform as the sole full-stack developer. I transformed technical requirements into robust, scalable features while ensuring code quality and system performance through diligent debugging and proactive maintenance. I led the UX/UI overhaul of key modules, developed a custom-built CMS, and built advanced tools like a Form Builder and Reports Builder to empower data-driven decisions.",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-background tactical-grid"></div>
      <div className="experience-background-text">CAREER</div>

      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">CAREER PROGRESSION</h2>
          <p className="section-subtitle">Professional journey & achievements</p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.id} item={item} isFirst={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;