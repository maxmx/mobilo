import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import { HTMLContent } from '../Content';

import Day from './day';

import hero2022 from '../../img/hero-2022.jpg';
import { Poster } from '../Hero/styles';
import { SiteNote } from '../styles';
import Promo from './promo';

export default ({ images, dates = [], content }) => (
  <>
    <Poster style={{ paddingTop: '3.25rem' }}>
      <img src={hero2022} alt="Dr. Mobilo Aquafest, 20 au 26 juin 2022" />
    </Poster>
    <Promo />

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

    <Grid>
      <Row>
        {Object.keys(dates).map((key, i) => (
          <Day {...{ key, images }} shows={dates[key]} index={i} />
        ))}
      </Row>

      <Promo />

      <HTMLContent {...{ content }} />
      <SiteNote>
        <span>
          Ce site est <a href="https://github.com/maxmx/mobilo">open source</a>
        </span>
        <a href="mailto:drmobilo@gmail.com">Contact</a>
      </SiteNote>
    </Grid>
  </>
);
