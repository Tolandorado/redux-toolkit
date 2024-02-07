import { useState } from "react";
import { RecipeItem } from "./recipe-item/recipeItem";
import { Header } from "../components/header/Header";


function App() {
  return (
    <section>
    <Header />

      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: "Baldur's Gate 3",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "The Finals",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Call of Duty",
          }}
        />
        <RecipeItem
          recipe={{
            id: 4,
            name: "Terraria",
          }}
        />
        <RecipeItem
          recipe={{
            id: 5,
            name: "Minecraft",
          }}
        />
      </div>
    </section>
  );
}

export default App;
