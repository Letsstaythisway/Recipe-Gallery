import React from "react";

function RecipeViewer({ name, type, image, closeModal }) {
  return (
    <div>
      <div>
        <img src="{image}" />
      </div>
      <div> {name}</div>
      <div> {title}</div>
      <button
        onClick={() => {
          closeModal(false);
        }}
      >
        Close
      </button>
    </div>
  );
}

export default RecipeViewer;
