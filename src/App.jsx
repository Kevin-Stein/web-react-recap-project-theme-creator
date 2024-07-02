import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";
import { useState } from "react";

function App() {
  const [colorArray, setColorArray] = useState(initialColors);

  function addColor(newColor) {
    setColorArray([{ id: crypto.randomUUID(), ...newColor }, ...colorArray]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm colorSubmit={addColor} />
      {colorArray.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
