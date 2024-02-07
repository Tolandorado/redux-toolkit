import { FaAccessibleIcon } from "react-icons/fa";
import styles  from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites"
export const Header = () => {
    const {favorites} = useFavorites()
    return (
        <header className={styles.header}>
        <FaAccessibleIcon size={40}/>
        <span>
            {favorites.length}
        </span>
        </header>
    )
}