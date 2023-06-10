import React, { Suspense, useState, useEffect } from 'react';
import FetchData from 'ApiGetter/ApiGetter';
import MovieItem from 'components/MovieItem/MovieItem';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Ul, Li, Link, LinkBack } from './MovieInfo.styled';
const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    FetchData(`movie/${movieId}`).then(mov => {
      setMovie(mov);
    });
  }, [movieId]);

  return (
    <main>
      <LinkBack to={location.state ? location.state : '/'}>
        Back to movies
      </LinkBack>
      {movie && <MovieItem film={movie}></MovieItem>}
      <h2>Additional information</h2>
      <Ul>
        <Li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </Li>
        <Li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </Li>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Ul>
    </main>
  );
};

export default MovieInfo;
