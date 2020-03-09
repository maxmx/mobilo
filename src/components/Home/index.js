import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import { HTMLContent } from '../Content';

import Galas from './galas';
import Day from './day';
import Promo from './promo';
import Hero from '../Hero';
import { Logo } from './styles';

import heroImg from '../../img/hero-2020.png';
import logo from '../../img/mobilo-logo.png';

export default ({ images, dates = [], galas, content }) => (
  <>
    <Hero image={heroImg} style={{ paddingTop: '7rem', minHeight: '50vh' }}>
      <Grid style={{ textAlign: 'center' }}>
        <Logo src={logo} alt="" />
        <h1 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '3rem' }}>1 au 16 Mai 2020</h1>
      </Grid>
    </Hero>
    <h1
      style={{
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '3rem',
        marginTop: '3rem',
        color: '#fcc163'
      }}
    >
      Les Galas
    </h1>
    <Galas {...{ galas, images }} />
    <h1
      style={{
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '3rem',
        marginTop: '3rem',
        color: '#62ddd7'
      }}
    >
      Les Spectacles
    </h1>
    <Promo />
    <Grid>
      <Row>
        {Object.keys(dates).map((key, i) => (
          <Day {...{ key, images }} shows={dates[key]} index={i} />
        ))}
      </Row>
      <Promo />

      <HTMLContent {...{ content }} />
    </Grid>
  </>
);
