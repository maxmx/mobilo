import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Logo, NavContainer, NavLink } from './styles';

export default () => (
  <NavContainer>
    <Grid>
      <Row between="xs" middle="xs">
        <Col>
          <Logo to="/">
            <span>Dr. Mobilo Aquafest</span>
          </Logo>
        </Col>
        <Col>
          <nav>
            <NavLink to="/">Dates</NavLink>
          </nav>
        </Col>
      </Row>
    </Grid>
  </NavContainer>
);
