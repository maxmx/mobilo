import styled from 'styled-components';

import { Row } from 'react-styled-flexboxgrid';

export const Artistes = styled.span`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.875rem;
`;

export const TicketContainer = styled(Row)`
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 0;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

export const Ticket = styled.a`
  background: #894131;
  padding: 0.5em 1em;
  text-decoration: none;
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
  display: inline-block;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const TicketDay = styled.div`
  font-size: 0.875rem;
`;
