import { FaAccessibleIcon } from "react-icons/fa";
import styles  from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
        <FaAccessibleIcon />
        </header>
    )
}