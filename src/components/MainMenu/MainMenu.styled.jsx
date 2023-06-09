import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: #1338be;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: #ffffff;
`;
