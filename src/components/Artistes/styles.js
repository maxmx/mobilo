import styled from 'styled-components';
import { Link } from 'gatsby';

import subTop from '../../img/sub-bg-top.png';
import subBottom from '../../img/sub-bg-bottom.png';

export const Title = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0 4px black;
`;

export const Window = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  > :nth-child(2) {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const SubBg = styled.div`
  position: relative;
  background: #ef9635;
  background: linear-gradient(to bottom, #ef9635 0%, #894f0a 100%);
  margin-top: 6rem;
  &:before {
    content: '';
    position: absolute;
    top: -250px;
    left: 0;
    right: 0;
    height: 250px;
    background: url(${subTop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -317px;
    left: 0;
    right: 0;
    height: 317px;
    background: url(${subBottom});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SubLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;

  color: ${props => props.theme.colors.black};
  text-shadow: 0 0 3px ${props => props.theme.colors.yellow};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.black};
  }
`;
