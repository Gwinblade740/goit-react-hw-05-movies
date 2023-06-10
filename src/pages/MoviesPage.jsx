import Movies from 'components/Movies/Movies';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <main>
      <Movies></Movies>
      <Outlet />
    </main>
  );
};

export default MoviesPage;
