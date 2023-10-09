import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  height: 55px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: bisque;
    border-radius: 50% 20% / 10% 40%;
  }
`;

export const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;

  font-family: 'Amazon Ember', sans-serif;
  font-size: 13px;

  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 90px;
  &:hover {
    background-color: #f7fafa;
    cursor: pointer;
  }
  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
