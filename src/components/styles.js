import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reboot from 'styled-reboot';

import bodyBg from '../img/body-bg.png';

export const theme = {
  colors: {
    black: '#0a1113',
    yellow: '#e5ad60',
    blue: '#40ab99',
    red: '#894131',
    white: '#fff'
  },
  flexboxgrid: {
    outerMargin: 1.5
  },
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1200
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem',
    7: '6rem'
  }
};

const rebootStyles = reboot({
  bodyBg: '#0a1113',
  bodyColor: '#fff',
  fontFamilyBase:
    'Arvo, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  linkColor: theme.colors.yellow,
  linkDecoration: 'none',
  linkHoverColor: '#f0af57',
  linkHoverDecoration: 'underline'
});

const bubbleUp = keyframes`
  from { background-position: 0 0; }
	to { background-position: 0 -500px; }
`;

export const BasicStyles = createGlobalStyle`
  ${rebootStyles};
`;

export const GlobalStyles = createGlobalStyle`
  ${rebootStyles};
  body {
    background-image: url(${bodyBg});
    background-position: 0px 0px;
    background-size: 500px;
    animation: ${bubbleUp} linear 20s infinite;
  }
  img {
    max-width: 100%;
  }
`;

export const SiteNote = styled.p`
  margin: 3rem 0;
  font-size: 0.75rem;
  text-align: center;
  &,
  & a,
  & a:hover {
    color: ${theme.colors.blue};
  }
  & a {
    font-weight: bold;
  }
`;
