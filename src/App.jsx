import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm";

import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colorArray, setColorArray] = useLocalStorageState("theme", {defaultValue:initialColors});

  function addColor(newColor) {
    setColorArray([{ id: crypto.randomUUID(), ...newColor }, ...colorArray]);
  }

  function handleDeleteColor(id) {
    setColorArray ((prevColors) => prevColors.filter((color) => color.id !== id));
    }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm colorSubmit={addColor} />

      {colorArray.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        colorArray.map((color) => {
          return <Color key={color.id} color={color} onDelete={handleDeleteColor} />;
        })
      )}
    </>
  );
}

export default App;
