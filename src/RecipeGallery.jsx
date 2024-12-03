import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeViewer from "./RecipeViewer";
import { useState } from "react";

const ori_Recipes = [
  {
    name: "Carbonara",
    type: "Pasta",
    desc: "A classic Roman pasta dish made with eggs, Pecorino Romano, guanciale, and black pepper, creating a creamy and rich sauce without cream.",
    image:
      "https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/1:1/w_2560%2Cc_limit/pasta-carbonara.jpg",
    ingredients: [
      "Guanciale – Cured pork cheek for savory depth.",
      "Egg yolks – Forms the creamy base of the sauce.",
      "Pecorino Romano cheese – Sharp and salty.",
      "Black pepper – Freshly ground for a bold flavor.",
      "Spaghetti – The traditional pasta choice.",
    ],
  },
  {
    name: "Tiramisu",
    type: "Dessert",
    desc: "A layered Italian dessert made with coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
    image:
      "https://www.wellseasonedstudio.com/wp-content/uploads/2023/11/Italian-tiramisu-on-a-plate-with-cocoa-powder-and-chocolate-shavings.jpg",
    ingredients: [
      "Ladyfingers – Soaked in espresso for a coffee base.",
      "Mascarpone cheese – Smooth and creamy.",
      "Egg yolks and sugar – Beaten into a rich custard.",
      "Cocoa powder – Dusted on top for a chocolate finish.",
    ],
  },
  {
    name: "Margherita Pizza",
    type: "Pizza",
    desc: "The iconic Neapolitan pizza made with a simple yet flavorful combination of tomato sauce, mozzarella, and fresh basil.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HIWxrVD2Ixb3iu5CYlNzQo42O8k86xy5vA&s",
    ingredients: [
      "Tomato sauce – Simple and fresh.",
      "Mozzarella cheese – Soft and melting.",
      "Basil – Aromatic and fresh.",
      "Olive oil – A finishing drizzle for shine.",
      "Pizza dough – Neapolitan-style, thin crust.",
    ],
  },
  {
    name: "Risotto alla Milanese",
    type: "Rice Dish",
    desc: "A creamy risotto flavored with saffron, giving it a distinctive golden hue, and often served with osso buco.",
    image:
      "https://i0.wp.com/www.cosiitaliano.com/wp-content/uploads/2014/11/Risotto-Milanese-Enhanced-680x510.jpg?fit=680%2C510&ssl=1",
    ingredients: [
      "Arborio rice – Short-grain rice ideal for risotto.",
      "Saffron – Adds color and flavor.",
      "Butter – For richness.",
      "Onion – Finely chopped and sautéed.",
      "Parmesan cheese – Stirred in for creaminess.",
      "White wine – For deglazing.",
    ],
  },
  {
    name: "Caprese Salad",
    type: "Salad",
    desc: "A simple Italian salad featuring fresh mozzarella, tomatoes, and basil, drizzled with olive oil and balsamic glaze.",
    image:
      "https://www.loveandoliveoil.com/wp-content/uploads/2010/08/072810_1.jpg",
    ingredients: [
      "Fresh mozzarella – Creamy and mild.",
      "Tomatoes – Ripe and juicy.",
      "Fresh basil leaves – For fragrance.",
      "Olive oil – Extra virgin, for drizzling.",
      "Balsamic glaze – Optional, for a sweet-tangy kick.",
    ],
  },
  {
    name: "Lasagna",
    type: "Pasta",
    desc: "Layers of pasta sheets, Bolognese sauce, béchamel, and cheese baked to perfection.",
    image:
      "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_3129,h_3129,c_limit/20231120-WEB-Lasanga-6422.jpg",
    ingredients: [
      "Pasta sheets – Thin and wide.",
      "Bolognese sauce – Rich meat sauce.",
      "Béchamel – Creamy white sauce.",
      "Parmesan and mozzarella cheese – For topping.",
      "Ground beef or pork – Used in the sauce.",
    ],
  },
  {
    name: "Osso Buco",
    type: "Main Dish",
    desc: "Braised veal shanks cooked with white wine, broth, and vegetables, often garnished with gremolata.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeF3PdldhS5TaXVjLzPJHmrtj7nxQ7X0rEAg&s",
    ingredients: [
      "Veal shanks – Centerpiece of the dish.",
      "White wine – For depth of flavor.",
      "Carrots, celery, and onions – Aromatic base.",
      "Tomato paste – Adds richness.",
      "Gremolata – A mix of parsley, garlic, and lemon zest.",
    ],
  },
  {
    name: "Bruschetta",
    type: "Appetizer",
    desc: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
    image:
      "https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg",
    ingredients: [
      "Bread – Sliced and toasted.",
      "Tomatoes – Diced and juicy.",
      "Garlic – Rubbed on the toast for flavor.",
      "Basil – Freshly chopped.",
      "Olive oil – A drizzle to finish.",
    ],
  },
  {
    name: "Focaccia",
    type: "Bread",
    desc: "A fluffy Italian flatbread flavored with olive oil and topped with rosemary, sea salt, or other ingredients.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNUR4lIMsEfAeXEGAdXES7QlJgEQJUNcFGw&s",
    ingredients: [
      "Flour – High-gluten for structure.",
      "Olive oil – Generously used for moisture and flavor.",
      "Yeast – Helps the dough rise.",
      "Sea salt – Sprinkled on top.",
      "Rosemary – Aromatic and earthy.",
    ],
  },
  {
    name: "Gelato",
    type: "Dessert",
    desc: "Italian ice cream, known for its rich texture and intense flavors.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaH4_DeWWnmmXUjwVsMv6hfROKSnazja1NPA&s",
    ingredients: [
      "Milk – The primary base.",
      "Sugar – For sweetness.",
      "Egg yolks – For creaminess.",
      "Flavorings – Such as vanilla, chocolate, or fruit puree.",
    ],
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
  const [recipes, setRecipes] = useState(ori_Recipes);

  const [showRecipe, setShowRecipe] = useState(false);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    console.log("Search VAlue ChangeD:", e.target.value);
    setSearchValue(e.target.value);
  };

  const searchFunction = () => {
    console.log("Search function called with value:", searchValue);
    const filteredItems = ori_Recipes.filter((item) => {
      return item.name.toLowerCase().includes(searchValue);
    });
    setRecipes(filteredItems);
  };

  return (
    <div className="flex flex-col align-center gap-3 flex-no-wrap">
      <h1 className="font-bold">Recipe Gallery</h1>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Dishes"
        required
        value={searchValue}
        onChange={handleOnChange}
      />
      <button
        type="button"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={searchFunction} // Correctly references the searchFunction
      >
        Search
      </button>

      <div className="flex gap-3 justify-center align-center mt-5 flex-wrap">
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
        <RecipeViewer data={selectedRecipe} closeModal={setShowRecipe} />
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeGallery;
