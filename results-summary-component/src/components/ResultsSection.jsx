import { useEffect, useState } from "react";

const ResultsSection = ({ showResults }) => {
  const [counter, setCounter] = useState(0);
  const [counterFinished, setCounterFinished] = useState(false);

  useEffect(() => {
    let intervalId;

    if (showResults) {
      intervalId = setInterval(() => {
        if (counter < 76) {
          setCounter((prevCounter) => prevCounter + 1);
        }
        if (counter === 76) {
          setCounterFinished(true);
        }
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [showResults, counter]);

  return (
    <section className="results-section">
      <h1 className="results-section__heading">Your Result</h1>

      <div className="result-container">
        <span className="result-bold">76</span>
        <span className="result">of 100</span>
      </div>

      <div
        className={`results-section__text-container ${
          counterFinished ? "fade-in-fwd" : ""
        }`}
      >
        <span>Great</span>

        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
