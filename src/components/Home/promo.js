import React from 'react';
import { Margin } from 'styled-components-spacing';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import P2 from '../../img/passes-2.png';

export default () => (
  <Margin bottom={{ xs: 3 }}>
    <Grid>
      <Row style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Col xs={12} md={4} mdOffset={4}>
          <Margin bottom={{ xs: 3 }}>
            <a href="https://shop.drmobilo.com/products/passe-scaphandrier-2023">
              <img src={P2} alt="" />
            </a>
          </Margin>
        </Col>
      </Row>
    </Grid>
  </Margin>
);
