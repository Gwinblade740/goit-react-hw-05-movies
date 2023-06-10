import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border-color: blue;
  border-style: inset;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  /* opacity: 0.6; */
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* cursor: pointer; */
  outline: none;

  /* &:hover {
    opacity: 1;
  } */
`;

export const Icon = styled(HiSearch)`
  width: 100%;
  height: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  padding: 8px 10px;
`;
