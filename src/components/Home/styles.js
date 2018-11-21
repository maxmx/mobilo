import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

export const Logo = styled.img`
  position: relative;
  width: 30vh;
  max-width: 50vw;
  margin-bottom: 1rem;
`;

export const Artiste = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
`;

export const Link = styled(GLink)`
  &:hover {
    text-decoration: none;
  }
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const Time = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.yellow};
`;

export const Day = styled.div`
  position: relative;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ 'data-color': color }) => color};
  min-height: 2.25rem;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${({ 'data-first': first }) => (first ? '0' : '-0.5rem')};
    right: ${({ 'data-last': last }) => (last ? '0' : '-0.5rem')};
    height: 3px;
    background: ${({ 'data-color': color }) => color};
  }
`;
