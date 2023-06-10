import React, { useState, useEffect } from 'react';
import FetchData from 'ApiGetter/ApiGetter';
import { useParams } from 'react-router-dom';
import { Content, Li, Title, Ul } from './Review.styled';
const Review = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FetchData(`movie/${movieId}/reviews`).then(rev => {
      setReview(rev.results);
    });
  }, [movieId]);
  return (
    <>
      <Ul>
        {review &&
          review.map(({ id, author, content }) => {
            return (
              <Li key={id}>
                <Title>{author}</Title>
                <Content>{content}</Content>
              </Li>
            );
          })}
      </Ul>
    </>
  );
};
export default Review;
