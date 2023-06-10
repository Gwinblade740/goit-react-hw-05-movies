import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const Li = styled.li`
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
`;
export const Link = styled(NavLink)`
  padding: 8px 10px;
`;
export const LinkBack = styled(NavLink)`
  display: inline-block;
  margin: 10px;
  padding: 5px;
  text-decoration-line: none;
  border-radius: 3px;
  border-color: blue;
  border-style: inset;
  font-weight: 600;
`;
