const ImperialUnits = () => {
  return (
    <div className="imperial-units__container">
      <div className="imperial-units__flex-container">
        <div className="input-container">
          <label htmlFor="height-ft">Height</label>
          <input type="text" id="height-ft" name="height-ft" />
          <span>ft</span>
        </div>
        <div className="input-container">
          <input type="text" id="height-in" name="height-in" />
          <span>in</span>
        </div>
      </div>

      <div className="imperial-units__flex-container">
        <div className="input-container">
          <label htmlFor="weight-st">Weight</label>
          <input type="text" id="weight-st" name="weight-st" />
          <span>ft</span>
        </div>
        <div className="input-container">
          <input type="text" id="weight-lbs" name="weight-lbs" />
          <span>lbs</span>
        </div>
      </div>
    </div>
  );
};

export default ImperialUnits;
