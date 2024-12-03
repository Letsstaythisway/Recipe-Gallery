import React from "react";

const RecipeCard = ({ data, opensessame, setSelectedRecipe }) => {
  const item = data;

  const OpenRecipeViewer = () => {
    opensessame(true);
    setSelectedRecipe(data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 my-3 bg-white text-black rounded">
      <img src={item.image} className="h-[250px] w-[250px] rounded" />
      <div> {item.name}</div>
      <div className="italic"> {item.type}</div>
      <button
        className="border border-0 rounded-1g bg-black text-white p-2 mb-3"
        onClick={OpenRecipeViewer}
      >
        Know More
      </button>
    </div>
  );
};

export default RecipeCard;
