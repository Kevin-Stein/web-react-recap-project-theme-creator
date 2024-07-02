import { useState } from "react";
import "./Color.css";
useState;

export default function Color({ color, onDelete }) {
  const [deleteMessage, setDeleteMessage] = useState(false);

  function handleDeleteClick() {
    setDeleteMessage(true);
  }
  function handleConfirmDelete() {
    onDelete(color.id);
  }
  function handleCancelDelete() {
    setDeleteMessage(false);
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
      <h4>{color.role}</h4>
      {deleteMessage ? (
        <div>
          <p className="color-card-hightlight">Really delete?</p>
          <button onClick={handleCancelDelete}>CANCEL</button>
          <button onClick={handleConfirmDelete}>DELETE</button>
        </div>
      ) : (
        <button onClick={handleDeleteClick}>DELETE</button>
      )}
    </div>
  );
}
