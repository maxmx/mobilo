import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Preview = styled.div`
  position: relative;
  color: black;
  width: 1280px;
  height: 720px;
`;

export const Label = styled.label`
  width: 100%;
  > input,
  > textarea {
    display: block;
    border-radius: 3px;
    padding: 0.5rem;
    width: 100%;
  }
  & + span {
    display: block;
    color: red;
  }
`;

export const UploadZone = styled.div`
  border: 2px dashed darkgrey;
  padding: 0.5rem;
`;

export const GuestImage = styled.div`
  position: absolute;
  top: 0;
  right: ${({ second }) => (second ? '300px' : '0')};
  bottom: 0;
  left: 510px;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center center;
`;

export const SecondGuestImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 870px;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center center;
  clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0 100%);
`;

export const Guest = styled.div`
  position: absolute;
  top: 350px;
  left: 70px;
  display: inline-block;
  color: white;
  font-weight: normal;
  font-size: ${({ 'data-fontsize': fontSize }) => fontSize}rem;
  line-height: ${({ 'data-fontsize': fontSize }) => fontSize * 1.1}rem;
  padding: 0.5rem 1rem;
  background: rgba(10, 30, 40, 0.8);
`;

export const Overlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 720px;
`;

export const Episode = styled.span`
  position: absolute;
  top: 260px;
  left: 70px;
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const Button = styled.button`
  background: #894131;
  padding: 0.5em 1em;
  text-decoration: none;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
  display: inline-block;
  border: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;
