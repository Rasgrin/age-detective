import "./App.scss";

import { useState } from "react";

import Inputs from "./components/inputs/Inputs";
import Result from "./components/result/Result";

function App() {
  const [data, setData] = useState({ day: 0, month: 0, year: 0 });
  const [errors, setErrors] = useState(false);

  return (
    <div className="App">
      <Inputs data={data} errors={errors} onData={setData} onErrors={setErrors} />
      <Result errors={errors} data={data} />
    </div>
  );
}

export default App;
