import React from "react";

function RecipeViewer({ data, closeModal }) {
  const { name, type, desc, image, ingredients } = data;

  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-80 bg-black text-white h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-4"
      aria-hidden="true"
    >
      <button
        className="border border-1 rounded-lg bg-white text-black px-6 py-2 self-end mr-10"
        onClick={() => {
          closeModal(false);
        }}
      >
        Close
      </button>
      <div className="bg-white flex flex-col items-center justify-center text-black px-8 py-4  rounded-lg gap-2 ">
        <img
          src={image}
          className="h-[250px] w-[250px] border border-0 rounded-full"
        />
      </div>
      <div>{desc}</div>
      <br />
      <div>{type}</div>
      <div>
        <ul>
          {ingredients.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default RecipeViewer;
