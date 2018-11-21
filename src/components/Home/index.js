import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import { HTMLContent } from '../Content';

import Day from './day';
import Hero from '../Hero';
import { Logo } from './styles';

import heroImg from '../../img/hero-2019.png';
import logo from '../../img/mobilo-logo.png';

export default ({ images, dates = [], content }) => (
  <>
    <Hero image={heroImg} style={{ paddingTop: '7rem', minHeight: '50vh' }}>
      <Grid style={{ textAlign: 'center' }}>
        <Logo src={logo} alt="" />
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '3rem' }}>4 au 11 Mai 2019</h1>
      </Grid>
    </Hero>
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
