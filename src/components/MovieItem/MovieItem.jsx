import React from 'react';
import { Desc, Span, Wrapper } from './MovieItem.styled';
import PropTypes from 'prop-types';
const MovieItem = ({
  film: { title, poster_path, vote_average, overview, genres },
}) => {
  const base_url = 'http://image.tmdb.org/t/p/';
  const poster_sizes = 'w342';

  return (
    <Wrapper>
      <img src={`${base_url}${poster_sizes}${poster_path}`} alt={title}></img>
      <Desc>
        <h1>{title}</h1>
        <p>Vote average: {vote_average}</p>
        <p>
          <Span>Overview:</Span> {overview}
        </p>
        <p>
          <Span>Genres</Span>
        </p>
        <ul>
          {genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </Desc>
    </Wrapper>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
};

export default MovieItem;
