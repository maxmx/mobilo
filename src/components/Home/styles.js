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
  color: ${({
    'data-color': color,
    theme: {
      colors: { blue }
    }
  }) => color || blue};
  min-height: 2.25rem;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${({ 'data-first': first }) => (first ? '0' : '-0.5rem')};
    right: ${({ 'data-last': last }) => (last ? '0' : '-0.5rem')};
    height: 3px;
    background: ${({
      'data-color': color,
      theme: {
        colors: { blue }
      }
    }) => color || blue};
  }
`;

export const PosterBg = styled.div`
  position: relative;
  background: ${({
    'data-color': color,
    theme: {
      colors: { blue }
    }
  }) => color || blue};
  border: 4px solid ${props => props.theme.colors.black};
  padding-top: calc(100% - 8px);
`;

const posterFontSize = {
  small: '1rem',
  medium: '1.8125rem'
};

export const PosterContent = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border: 6px solid ${props => props.theme.colors.black};
  box-shadow: inset 0 0 0 10px
    ${({
      'data-color': color,
      theme: {
        colors: { blue }
      }
    }) => color || blue};
  border-radius: ${({ 'data-index': index }) => (index % 2 === 0 ? '33% 0 33%' : '0 33% 33%')};
  padding: 10%;
  background: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ 'data-size': size }) => posterFontSize[size]};
  text-transform: uppercase;
  text-align: center;
  span {
    color: ${({
      'data-color': color,
      theme: {
        colors: { blue }
      }
    }) => color || blue};
  }
`;

export const Overlayer = styled.div`
  position: relative;
  > :nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
