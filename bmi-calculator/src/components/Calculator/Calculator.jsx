import { useState } from "react";

import MetricUnits from "./MetricUnits";
import ImperialUnits from "./ImperialUnits";

import Results from "./Results";

const Calculator = () => {
  const [option, setOption] = useState("metric");
  return (
    <div className="calculator">
      <span className="calculator__heading">Enter your details below</span>

      <div className="calculator__radio-btns"></div>

      {option === "metric" ? <MetricUnits /> : <ImperialUnits />}

      <Results />
    </div>
  );
};

export default Calculator;
