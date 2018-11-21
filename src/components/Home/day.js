import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Img from 'gatsby-image';

import { Artiste, Title, Time, Link, Day } from './styles';

const colors = ['#860000', '#aa2d2d', '#ef9635', '#fcc163', '#f2b39e', '#62ddd7', '#03938c', '#16716e'];

export default ({ shows = [], images, index }) => (
  <>
    {shows.map(({ title, day, time, poster, artistes, slug }, i) => (
      <Col key={`${title}-${day}-${time}`} xs={12} sm={6} md={4} lg={3}>
        <Link to={slug}>
          {
            <Day data-color={colors[index]} data-first={i === 0} data-last={i === shows.length - 1}>
              {i === 0 ? day : ''}
            </Day>
          }
          <Margin bottom={{ xs: 3 }}>
            <Img fluid={images[poster]} />
          </Margin>
          <p>
            <Artiste>{artistes.length > 1 ? 'Artistes Variés' : artistes[0]}</Artiste>
            <br />
            <Title>{title}</Title>
            <br />
            <Time>{time}</Time>
          </p>
        </Link>
      </Col>
    ))}
  </>
);
