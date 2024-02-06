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
            name: "Мешок говна",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Kingdom Cum",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Твердый панос",
          }}
        />
        <RecipeItem
          recipe={{
            id: 4,
            name: "голая Шмаль",
          }}
        />
        <RecipeItem
          recipe={{
            id: 5,
            name: "Герыч",
          }}
        />
      </div>
    </section>
  );
}

export default App;
