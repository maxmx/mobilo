import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { ThemeProvider } from 'styled-components';
import Img from 'gatsby-image';

import { HTMLContent } from '../Content';
import { Title, Window, SubBg, SubLink } from './styles';
import Hero from '../Hero';

import heroImg from '../../img/wave-blue.png';
import subWindow from '../../img/sub-window.png';

const theme = {
  flexboxgrid: {
    gutterWidth: 0 // rem
  }
};

export default ({ title, artistes = [], images, content }) => (
  <>
    <Hero image={heroImg} repeat style={{ paddingTop: '7rem', minHeight: '330px' }}>
      <Grid>
        <Title style={{ textTransform: 'uppercase' }}>{title}</Title>
      </Grid>
    </Hero>
    <SubBg>
      <ThemeProvider {...{ theme }}>
        <Grid>
          <Row center="xs">
            {artistes.map(({ title: name, image, slug }) => (
              <Col xs={6} sm={4} md={3} lg={2} key={slug}>
                <SubLink to={slug}>
                  <Window>
                    <img src={subWindow} alt="" />
                    {images[image] && <Img fluid={images[image]} />}
                  </Window>
                  {name}
                </SubLink>
              </Col>
            ))}
          </Row>
          <HTMLContent {...{ content }} />
        </Grid>
      </ThemeProvider>
    </SubBg>
  </>
);
