import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={styles.link} activeClassName={styles.active__link} exact>
                Home
            </NavLink>
            <NavLink to="/movies" className={styles.link} activeClassName={styles.active__link} exact>
                Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;