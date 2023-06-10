import FetchData from '../../ApiGetter/ApiGetter';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Btn, Form, Icon, Input, Link, Ul } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return setMovies(null);
    }
    FetchData('search/movie', query).then(mov => {
      setMovies(mov.results);
    });
  }, [query]);

  const handleChange = ({ target: { value } }) => {
    const nextParams = value.trim() !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Form>
        <Btn type="submit" disabled>
          <Icon></Icon>
        </Btn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />
      </Form>
      <Ul>
        {movies &&
          movies.map(movie => {
            return (
              <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
                {movie.title}
              </Link>
            );
          })}
      </Ul>
    </>
  );
};

export default Movies;