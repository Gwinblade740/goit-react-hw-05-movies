import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';
const HomePage = lazy(() => import('pages/HomePage'));
const MovieInfo = lazy(() => import('pages/MovieInfo'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Review = lazy(() => import('components/Review/Review'));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Review />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
