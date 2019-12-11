import React from 'react';
import { Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Img from 'gatsby-image';

import PlaceHolder from './placeholder';
import { Artiste, Title, Time, Link, Day, Overlayer } from './styles';

const colors = ['#860000', '#aa2d2d', '#ef9635', '#fcc163', '#f2b39e', '#62ddd7', '#03938c', '#16716e'];

export default ({ shows = [], images, index }) => (
  <>
    {shows.map(({ title, day, time, poster, artistes, slug }, i) => (
      <Col key={`${title}-${day}-${time}`} xs={12} md={4}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to={slug}>
          <Day data-color={colors[index]} data-first={i === 0} data-last={i === shows.length - 1}>
            {i === 0 ? day : ''}
          </Day>
          <Margin bottom={{ xs: 3 }}>
            <Overlayer>
              <PlaceHolder {...{ color: colors[index], index, title }} />
              {images[poster] && (
                <div>
                  <Img fluid={images[poster]} />
                </div>
              )}
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
      </Col>
    ))}
  </>
);
