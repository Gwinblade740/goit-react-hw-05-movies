import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './MainMenu.styled';

const MainMenu = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MainMenu;
