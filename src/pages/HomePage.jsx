import FetchData from 'ApiGetter/ApiGetter';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Li, Ul, Link, H1 } from './HomePage.style';
const base_url = 'http://image.tmdb.org/t/p/w200';
const noPosterUrl = 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';
const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    FetchData('trending/movie/day').then(mov => {
      setMovies(mov.results);
    });
  }, []);

  return (
    <main>
      <H1>Trending</H1>
      <Ul>
        {movies &&
          movies.map(movie => {
            return (
              <Li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  <img
                    src={
                      movie.poster_path
                        ? `${base_url}${movie.poster_path}`
                        : noPosterUrl
                    }
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </Link>
              </Li>
            );
          })}
      </Ul>
    </main>
  );
};
export default HomePage;
