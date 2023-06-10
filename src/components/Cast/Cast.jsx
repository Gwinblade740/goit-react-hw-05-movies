import FetchData from 'ApiGetter/ApiGetter';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Li, Ul } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    FetchData(`movie/${movieId}/credits`).then(cas => {
      setCast(cas.cast);
    });
  }, [movieId]);
  return (
    <>
      <Ul>
        {cast &&
          cast.map(el => {
            return <Li key={el.id}>{el.name}</Li>;
          })}
      </Ul>
    </>
  );
};

export default Cast;
