import { getMovies } from "Api/Api";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';


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
                        <li key={movie.id}>
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