import { useState } from "react";
import "./App.css";

function App() {
  let [isLight, setLight] = useState(true);

  function toggle() {
    setLight((isLight) => !isLight);
  }

  return (
    <div className={isLight ? "" : "app"}>
      <button onClick={toggle}>{isLight ? "oq" : "qora"}</button>
    </div>
  );
}

export default App;

