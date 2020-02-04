import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import { HTMLContent } from '../Content';

import Day from './day';
import Hero from '../Hero';
import { Logo } from './styles';

import heroImg from '../../img/hero-2020.png';
import logo from '../../img/mobilo-logo.png';
import P1 from '../../img/passes-1.png';
import P2 from '../../img/passes-2.png';
import P3 from '../../img/passes-3.png';

export default ({ images, dates = [], content }) => (
  <>
    <Hero image={heroImg} style={{ paddingTop: '7rem', minHeight: '50vh' }}>
      <Grid style={{ textAlign: 'center' }}>
        <Logo src={logo} alt="" />
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '3rem' }}>1 au 16 Mai 2020</h1>
      </Grid>
    </Hero>
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
    <Grid>
      <Row>
        {Object.keys(dates).map((key, i) => (
          <Day {...{ key, images }} shows={dates[key]} index={i} />
        ))}
      </Row>
      <HTMLContent {...{ content }} />
    </Grid>
  </>
);
