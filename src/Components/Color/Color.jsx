import { useState } from "react";
import "./Color.css";

import ColorForm from "../ColorForm";

export default function Color({ color, onDelete }) {
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [edit, setEdit] = useState(false);

  async function writeClipboardText(hexColor) {
    try {
      await navigator.clipboard.writeText(hexColor);
    } catch (error) {
      console.error(error.message);
    }
  }
  

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <button onClick={writeClipboardText(color.hex)}>COPY</button>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {edit ? (
        <>
          <ColorForm buttonName="UPDATE COLOR" />
          <button onClick={() => setEdit(false)} className="colorForm__button" type="button">
            CANCEL
          </button>
        </>
      ) : (
        <>
          {deleteMessage ? (
            <div>
              <p className="color-card-highlight">Really delete?</p>
              <button onClick={() => setDeleteMessage(false)}>CANCEL</button>
              <button onClick={() => onDelete(color.id)}>DELETE</button>
            </div>
          ) : (
            <>
              <button onClick={() => setDeleteMessage(true)}>DELETE</button>
              <button onClick={() => setEdit(true)}>EDIT</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
