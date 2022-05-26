import { useParams, Route, Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getMoviesById, getMoviesReviews, getMoviesCasts } from "Api/Api";
import Cast from "components/Cast/Cast";
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useRef, useState } from "react";

import styles from './MoviesDetailsPage.module.css'

const MovieDetailsPage = () => {
    const match = useRouteMatch();
    const [moviesIdInfo, setMoviesIdInfo] = useState(null);
    const [moviesIdReview, setMoviesIdReview] = useState(null);
    const [moviesIdCast, setMoviesIdCast] = useState(null);

    const { moviesId } = useParams();

    const routerState = useRef(null);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (!routerState.current) {
            routerState.current = location.state;
        }
    }, [/* location.state */]);

    useEffect(() => {
        getMoviesById(moviesId).then(setMoviesIdInfo);
        getMoviesReviews(moviesId).then(setMoviesIdReview);
        getMoviesCasts(moviesId).then(setMoviesIdCast);
    }, [moviesId]);

    return (
        <>
            <button className={styles.btn} onClick={() => {
                const paramsPath = routerState.current.params.pathname;
                const paramsSearch = routerState.current.params.search;
                history.push(`${paramsPath}${paramsSearch}`);
            }}>
                Back
                
            </button>

            <h2>MovieDetailsPage</h2>

            {moviesIdInfo && (
                <>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${moviesIdInfo.poster_path}`}
                        alt={moviesIdInfo.title}
                        width="250"
                    />
                    <h2>
                        {moviesIdInfo.title}({moviesIdInfo.release_date.slice(0, 4)})
                    </h2>
                    <h3>Overview:</h3>
                    <p>{moviesIdInfo.overview}</p>
                    <h3>Genres</h3>
                    <p>{moviesIdInfo.genres.map(genre => genre.name + ' ')}</p>
                    <Link to={`${match.url}/cast`}>
                        <li>Cast</li>
                    </Link>
                    <Link to={`${match.url}/reviews`}>
                        <li>Reviews</li>
                    </Link>
                    <Route path={`${match.url}/cast`}>
                        {moviesIdCast && <Cast moviesIdCast={moviesIdCast} />}
                    </Route>
                    <Route path={`${match.url}/reviews`}>
                        {moviesIdReview && <Reviews moviesIdReview={moviesIdReview} />}
                    </Route>
        
                </>
            )}
        </>
    );        
                
}

export default MovieDetailsPage;