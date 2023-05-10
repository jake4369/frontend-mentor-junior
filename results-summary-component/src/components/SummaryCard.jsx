import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

const SummaryCard = ({ data, delay, className }) => {
  const iconMap = {
    reaction: iconReaction,
    memory: iconMemory,
    verbal: iconVerbal,
    visual: iconVisual,
  };

  return (
    <div
      className={`summary-card summary-card__${data.title} ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="summary-card__title-container">
        <img
          src={iconMap[data.title.toLowerCase()]}
          alt={`${data.title} icon`}
          className="summary-card__icon"
        />

        <h3 className="summary-card__title">{data.title}</h3>
      </div>

      <div className="summary-card__score-container">
        <span className="summary-card__score-bold">{data.score}</span>
        <span className="summary-card__score">/ 100</span>
      </div>
    </div>
  );
};

export default SummaryCard;
