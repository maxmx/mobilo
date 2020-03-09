import React from 'react';
import { Margin } from 'styled-components-spacing';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import P1 from '../../img/passes-1.png';
import P2 from '../../img/passes-2.png';
import P3 from '../../img/passes-3.png';

export default () => (
  <Margin bottom={{ xs: 3 }}>
    <Grid>
      <Row around="xs" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Col xs={12} md={4}>
          <Margin bottom={{ xs: 3 }}>
            <a href="https://shop.drmobilo.com/collections/frontpage/products/passe-scaphandrier-2020">
              <img src={P1} alt="" />
            </a>
          </Margin>
        </Col>
        <Col xs={12} md={4}>
          <Margin bottom={{ xs: 3 }}>
            <a href="https://shop.drmobilo.com/collections/frontpage/products/passe-scaphandrier-2020">
              <img src={P2} alt="" />
            </a>
          </Margin>
        </Col>
        <Col xs={12} md={4}>
          <Margin bottom={{ xs: 3 }}>
            <a href="https://shop.drmobilo.com/collections/frontpage/products/passe-scaphandrier-2020">
              <img src={P3} alt="" />
            </a>
          </Margin>
        </Col>
      </Row>
    </Grid>
  </Margin>
);
