/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Margin } from 'styled-components-spacing';
import Img from 'gatsby-image';

import PlaceHolder from './placeholder';
import { Artiste, Title, Time, Link, Day, Overlayer, Badge } from './styles';

export default ({ title, day, time, poster, artistes = [], slug, first, last, color, badge, index = 0 }) => (
  <Link to={slug}>
    <Day data-color={color} data-first={first} data-last={last}>
      {first ? day : ''}
    </Day>
    <Margin bottom={{ xs: 3 }}>
      <Overlayer>
        <PlaceHolder {...{ color, index, title }} />
        {poster && (
          <div>
            <Img fluid={poster} />
          </div>
        )}
        {badge && <Badge>{badge}</Badge>}
      </Overlayer>
    </Margin>
    <p>
      <Artiste>{artistes.length > 2 ? 'Artistes Variés' : artistes.join(' & ')}</Artiste>
      <br />
      <Title>{title}</Title>
      <br />
      <Time>{time}</Time>
    </p>
  </Link>
);
