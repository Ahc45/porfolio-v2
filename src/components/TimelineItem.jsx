import React, { useState } from "react";

const TimelineItem = ({ item, isFirst = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const playClickSound = () => {
    const audio = new Audio(
      "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBCOEx+/zix4FEo3b+N2QPwgWZr/0xmkfCiWS4fO8aDMGHm+668OAMwgTdcy/6HhHDh1is+OqYisJIJnZ8cZ2KAQoiNLzz3IpBSqO2/DMdysEK4fQ8tJ5KAQ"
    );
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const playHoverSound = () => {
    const audio = new Audio(
      "data:audio/wav;base64,UklGRvIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU4AAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBSi"
    );
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  return (
    <div className="timeline-item">
      <div className={`timeline-marker ${isFirst ? "first-marker" : ""}`}></div>
      <div className="timeline-content corner-clip">
        <div className="timeline-header-info">
          <h4
            className="company-name-main"
            onClick={() => {
              playClickSound();
              setIsExpanded(!isExpanded);
            }}
            onMouseEnter={playHoverSound}
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "var(--tech-red)",
              margin: "0 0 4px 0",
              transition: "color 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {item.company || "Company"}
            <span
              style={{
                fontSize: "0.8em",
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: "var(--tech-red)",
              }}
            >
              {isExpanded ? "△" : "▽"}
            </span>
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              className="job-title-sub"
              style={{
                fontSize: "0.9rem",
                color: "#ccc",
                fontWeight: "400",
              }}
            >
              {item.title}
            </span>
            <span className="timeline-date">{item.date}</span>
          </div>
        </div>
        <div
          className="timeline-description"
          style={{
            maxHeight: isExpanded ? "200px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            marginTop: isExpanded ? "10px" : "0",
          }}
        >
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
