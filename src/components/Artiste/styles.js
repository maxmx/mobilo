import styled, { keyframes } from 'styled-components';

import { Link as GLink } from 'gatsby';

const floating = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px)
  }
`;

export const Content = styled.div`
  padding-top: 320px;
`;

export const Header = styled.h1`
  color: ${props => props.theme.colors.blue};
  margin-bottom: 2rem;
`;

export const Link = styled(GLink)`
  &:hover {
    text-decoration: none;
  }
`;

export const Scaphandrier = styled.div`
  position: relative;
  animation: 5s ${floating} ease-in-out infinite;
  > img {
    width: 100%;
  }
  &:after {
    content: '';
    position: absolute;
    top: 8.5%;
    left: -3.5%;
    width: 100%;
    height: 100%;
    background-image: url(${({ 'data-image': image }) => image});
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: center top;
  }
`;
