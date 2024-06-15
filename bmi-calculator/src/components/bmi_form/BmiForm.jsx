import { useState, useEffect } from "react";

const BmiForm = () => {
  const [measure, setMeasure] = useState("metric");
  const [BMI, setBMI] = useState("");

  const handleSelect = (e) => {
    setBMI("");
    setMeasure(e.target.value);
  };

  return (
    <div className="form__container">
      <h2 className="form__heading">Enter your details below</h2>

      <div className="form__radio-btns">
        <label htmlFor="metric">
          Metric
          <input
            type="radio"
            name="measure"
            id="metric"
            value="metric"
            onChange={handleSelect}
            checked={measure === "metric"}
          />
        </label>

        <label htmlFor="imperial">
          Imperial
          <input
            type="radio"
            name="measure"
            id="imperial"
            value="imperial"
            onChange={handleSelect}
            checked={measure === "imperial"}
          />
        </label>
      </div>

      {measure === "metric" ? (
        <MetricInputs setBMI={setBMI} />
      ) : (
        <ImperialInputs setBMI={setBMI} />
      )}
    </div>
  );
};

const MetricInputs = ({ setBMI }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    if (height !== "" && weight !== "") {
      const heightInMeters = parseInt(height) / 100;
      const BMI = parseInt(weight) / heightInMeters ** 2;

      setBMI(BMI.toFixed(1));
    }
  }, [height, weight, setBMI]);

  return (
    <div className="measure-inputs metric-inputs">
      <label htmlFor="height">
        Height
        <input
          type="text"
          name="height"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>

      <label htmlFor="weight">
        Weight
        <input
          type="text"
          name="weight"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
    </div>
  );
};

const ImperialInputs = ({ setBMI }) => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [stones, setStones] = useState("");
  const [pounds, setPounds] = useState("");

  useEffect(() => {
    if (feet !== "" && inches !== "" && stones !== "" && pounds !== "") {
      const poundsPerStone = 14;
      const inchesPerFoot = 12;

      const weightInPounds =
        parseInt(stones) * poundsPerStone + parseInt(pounds);
      const heightInInches = parseInt(feet) * inchesPerFoot + parseInt(inches);

      const bmi = (weightInPounds / heightInInches ** 2) * 703;

      setBMI(bmi.toFixed(1));
    }
  }, [feet, inches, stones, pounds, setBMI]);

  return (
    <div className="measure-inputs imperial-inputs">
      <label htmlFor="height">
        Height
        <div className="imperial-inputs">
          <input
            type="text"
            name="height-ft"
            id="height"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
          <input
            type="text"
            name="height-in"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
        </div>
      </label>

      <label htmlFor="weight">
        Weight
        <div className="imperial-inputs">
          <input
            type="text"
            name="weight-st"
            id="weight"
            value={stones}
            onChange={(e) => setStones(e.target.value)}
          />
          <input
            type="text"
            name="weight-lbs"
            value={pounds}
            onChange={(e) => setPounds(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
};

export default BmiForm;
