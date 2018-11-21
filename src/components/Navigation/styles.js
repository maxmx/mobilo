import styled from 'styled-components';

import { Link } from 'gatsby';

import logoImg from '../../img/sub-icon.png';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 38px;
  background: url(${logoImg});
  background-size: 20%;
  padding-left: 2.5rem;
  background-repeat: no-repeat;
  background-position: left center;

  color: ${props => props.theme.colors.blue};
  font-weight: bold;
  font-size: 0.75rem;
  &:hover {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 0.75rem;

  & + & {
    margin-left: 1rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
  }
`;
