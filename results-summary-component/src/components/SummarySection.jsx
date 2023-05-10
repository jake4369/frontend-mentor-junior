import { useEffect, useState } from "react";

import data from "../data.json";
import SummaryCard from "./SummaryCard";

const SummarySection = ({ setShowResults }) => {
  const [showBtn, setShowBtn] = useState(false);

  const summaryCards = data.map((obj, index) => {
    return (
      <SummaryCard
        key={obj.title}
        data={obj}
        delay={`${index * 0.5}s`}
        className="fade-in-fwd"
      />
    );
  });

  useEffect(() => {
    setInterval(() => {
      setShowBtn(true);
    }, 2000);
  });

  const handleClick = () => {
    setShowResults(true);
  };

  return (
    <section className="summary-section">
      <h2 className="summary-section__heading">Summary</h2>

      <div className="summaryCards-container">{summaryCards}</div>

      <button
        className={`continue-btn ${showBtn ? "fade-in-fwd" : ""}`}
        onClick={handleClick}
      >
        Continue
      </button>
    </section>
  );
};

export default SummarySection;
