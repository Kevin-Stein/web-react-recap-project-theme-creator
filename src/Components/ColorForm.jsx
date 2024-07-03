import { useState } from "react";
import "./ColorForm.css";

export default function ColorForm({ colorSubmit, buttonName,}) {
  const [hexColor, setHexColor] = useState("#000000");
  const [contrastColor, setContrastColor] = useState("#ffffff");
    function updateHexColor(event) {
    setHexColor(event.target.value);
  }
  function updateContrastColor(event) {
    setContrastColor(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newColor = { role: event.target.role.value, hex: hexColor, contrastText: contrastColor };
    colorSubmit(newColor);
    event.target.reset()
  }

  return (
    <form className="color__form" onSubmit={handleSubmit} >
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" aria-label="role_input_field"></input>
      <label htmlFor="hex">Hex</label>
      <div className="Input__wrapper">
          <input
          className="input"
            type="text"
            id="hex"
            name="hex"
            aria-label="hex_color_input_field"
            value={hexColor}
            onChange={updateHexColor}
            placeholder="sample color"
          ></input>
          <input
            type="color"
            id="hexColor"
            name="hexColor"
            aria-label="hex_color_picker"
            value={hexColor}
            onChange={updateHexColor}
          ></input>
      </div>
      <label htmlFor="contrastText">Contrast Text</label>
      <div className="Input__wrapper">
          <input
          className="input"
            type="text"
            id="contrastText"
            name="contrastText"
            aria-label="contrast_color_input_field"
            value={contrastColor}
            onChange={updateContrastColor}
          ></input>
          <input
            type="color"
            id="contrastColor"
            name="contrastColor"
            aria-label="contrast_color_picker"
            value={contrastColor}
            onChange={updateContrastColor}
          ></input>
      </div>
      <button className="colorForm__button" type="submit" >
        {buttonName}
      </button>
    </form>
  );
}
