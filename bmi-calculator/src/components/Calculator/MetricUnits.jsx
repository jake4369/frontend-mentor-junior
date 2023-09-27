const MetricUnits = () => {
  return (
    <div className="metric-units__container">
      <div className="input-container">
        <label htmlFor="height-cm">Height</label>
        <input
          type="text"
          id="height-cm"
          name="height-cm"
          className="input__metric"
        />
        <span>cm</span>
      </div>

      <div className="input-container">
        <label htmlFor="weight-kg">Weight</label>
        <input
          type="text"
          id="weight-kg"
          name="weight-kg"
          className="input__metric"
        />
        <span>kg</span>
      </div>
    </div>
  );
};

export default MetricUnits;
