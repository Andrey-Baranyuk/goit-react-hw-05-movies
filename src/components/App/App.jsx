import { lazy, Suspense } from "react";
import { Route, Switch } from "react";
import  Navigation  from "../Navigation/Navigation";
//import styles from "./App.module.css";

const HomePage = lazy(() => import('components/HomePage/HomePage.jsx'))
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('../MoviesDetailsPage/MoviesDetailsPage.jsx'));
const NotFoundView = lazy(() => import('../NotFoundView/NotFoundView.jsx'),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}


export default App;
