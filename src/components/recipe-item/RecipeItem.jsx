import { useSelector } from "react-redux";
import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";

export const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);
  console.log(favorites);

  const {toggleFavorites} = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <>
      <div>
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
