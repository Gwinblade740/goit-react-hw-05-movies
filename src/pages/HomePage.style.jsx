import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Li = styled.li`
  margin-bottom: 10px;
  margin: 0px 60px;
  list-style-type: none;
  flex-basis: calc((100% - 3 * 15px) / 6);
`;
export const H1 = styled.h1`
  margin-left: 100px;
`;
export const Link = styled(NavLink)``;
