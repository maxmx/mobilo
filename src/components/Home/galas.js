import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import sortBy from 'lodash.sortby';

import Link from './link';

export default ({ galas, images }) => {
  console.log(galas);
  return (
    <Grid>
      <Row>
        {sortBy(galas, ['order']).map(({ title, day, time, poster, artistes, slug }, i) => {
          const sharp = images[poster];
          return (
            <Col key={`${title}-${day}-${time}`} xs={12} md={4}>
              <Link
                {...{ title, day, time, poster: sharp, artistes, slug, first: true, last: true, color: '#ef9635' }}
              />
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
};
