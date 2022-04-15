import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: relative;
  background: ${({ 'data-bg': bg }) => `url(${bg})`};
  background-size: ${({ 'data-repeat': repeat }) => (repeat ? 'initial' : 'cover')};
  background-position: center center;
  background-repeat: ${({ 'data-repeat': repeat }) => (repeat ? 'initial' : 'no-repeat')};

  &:before {
    content: '';
    top: 100%;
    height: 2rem;
    left: 0;
    right: 0;
    position: absolute;
  }

  &:after {
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(10, 17, 19, ${({ 'data-darkness': d = 0 }) => d}) 0%,
      rgba(10, 17, 19, ${({ 'data-fade': f }) => (f ? '1' : '0')}) 80%,
      rgba(10, 17, 19, ${({ 'data-fade': f }) => (f ? '1' : '0')}) 100%
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Poster = styled.div`
  position: relative;
  text-align: center;
  background-color: rgb(229, 202, 173);

  &:before {
    content: '';
    top: 100%;
    height: 2rem;
    left: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(to bottom, rgba(10, 17, 19, 1) 0%, rgba(10, 17, 19, 0) 100%);
  }
  &:after {
    content: '';
    top: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 2;
    background: linear-gradient(to bottom, rgba(10, 17, 19, 0) 0%, rgba(10, 17, 19, 0) 80%, rgba(10, 17, 19, 1) 100%);
  }
  > * {
    position: relative;
    z-index: 1;
  }
`;
