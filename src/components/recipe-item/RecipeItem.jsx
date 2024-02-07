import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

export const RecipeItem = ({ recipe }) => {
  const {favorites} = useFavorites()
  console.log(favorites);

  const {toggleFavorites} = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <>
      <div className={styles.container}>
        {/* <img src=''/>*/}
        <h2>{recipe.name}</h2>
        <button
          className={styles.btn}
          onClick={() =>
          toggleFavorites(recipe)}
        >
          <span className={styles.span}>
            {isExists ? "Remove From " : "Add To "}
            favorites
          </span>
        </button>
      </div>
    </>
  );
};
