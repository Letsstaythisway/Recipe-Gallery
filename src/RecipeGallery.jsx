import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeViewer from "./RecipeViewer";
import { useState } from "react";

const recipes = [
  {
    name: "Ametriciana",
    type: "Pasta",
    image:
      "https://www.insidetherustickitchen.com/wp-content/uploads/2021/07/Bucatini-Amatriciana-1200px-inside-the-rustic-kitchen.jpg",
  },
];

const galleryStyle = {
  display: "flex",
  gap: "15px",
  width: "100%",
  height: "100vh",
  flexwrap: "wrap",
};

const RecipeGallery = () => {
  const [showRecipe, setShowRecipe] = useState(false);

  const [selectedRecipe, setSelectedRecipe] = useState({
    name: "",
    type: "",
    image: "",
  });

  return (
    <div>
      <h1>Recipe Gallery</h1>
      <div>
        {recipes.map((item) => {
          return (
            <RecipeCard
              opensessame={setShowRecipe}
              data={item}
              setSelectedRecipe={setSelectedRecipe}
            />
          );
        })}
      </div>
      {showRecipe ? (
        <RecipeViewer {...selectedRecipe} closeModal={setShowRecipe} />
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeGallery;
