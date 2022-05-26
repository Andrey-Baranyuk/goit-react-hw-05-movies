import { getMovies } from "Api/Api";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import styles from './HomePage.module.css'


const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        getMovies().then(setMovies);
    }, []);
    return (
        <>
            <h2>Home Page</h2>
            {
                movies &&
                movies.map(
                    movie => (
                        <li key={movie.id} className={styles.HomePage__item}>
                            <Link
                                to={{
                                    pathname: `movies/${movie.id}`,
                                    state: { params: location },
                                }} >
                                {movie.title}
                            </Link>
                        </li>
                    )
                )
            }
        </>
    );
};

export default HomePage;