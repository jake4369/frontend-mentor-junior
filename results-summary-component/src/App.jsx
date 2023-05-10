import { useState } from "react";

import ResultsSection from "./components/ResultsSection";
import SummarySection from "./components/SummarySection";

const App = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <main>
      <ResultsSection showResults={showResults} />
      <SummarySection setShowResults={setShowResults} />
    </main>
  );
};

export default App;
