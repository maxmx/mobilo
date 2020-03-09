import React from 'react';
import { Col } from 'react-styled-flexboxgrid';

import Link from './link';

const colors = ['#860000', '#aa2d2d', '#ef9635', '#fcc163', '#f2b39e', '#62ddd7', '#03938c', '#16716e'];

export default ({ shows = [], images, index, filterFn = ({ gala }) => !gala }) => {
  const color = colors[index % colors.length];

  return (
    <>
      {shows.filter(filterFn).map(({ title, day, time, poster, artistes, slug }, i) => {
        const first = i === 0;
        const last = i === shows.length - 1;
        const sharp = images[poster];
        return (
          <Col key={`${title}-${day}-${time}`} xs={12} md={4} lg={3}>
            <Link {...{ title, day, time, poster: sharp, artistes, slug, first, last, color }} />
          </Col>
        );
      })}
    </>
  );
};
