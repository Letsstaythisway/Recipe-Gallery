import React from "react";

const RecipeCard = ({ data, opeansessame, setSelectedRecipe }) => {
  const item = data;

  const OpenRecipeViewer = () => {
    opeansessame(true);
    setSelectedRecipe(data);
  };

  return (
    <div>
      <img src={item.image} />
      <div> {item.name}</div>
      <div> {item.type}</div>
      <button onClick={OpenRecipeViewer}>Know More</button>
    </div>
  );
};

export default RecipeCard;
