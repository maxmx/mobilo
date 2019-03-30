import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { HTMLContent } from '../Content';
import { SubBg } from '../Artistes/styles';
import { Artiste, Title } from '../Home/styles';
import { Content, Header, Link, Scaphandrier } from './styles';
import PlaceHolder from '../Home/placeholder';

import scaphandrierImg from '../../img/scaphandrier.png';

export default ({ name, image, shows = [], content }) => (
  <>
    <SubBg style={{ marginTop: 0 }} />
    <Content>
      <Grid>
        <Row>
          <Col xs={12} sm={7}>
            <Header>{name}</Header>
            <p style={{ marginBottom: '2rem' }}>
              Voici {shows.length > 1 ? 'les spectacles' : 'le spectacle'} dont fera partie {name} lors du Festival du
              Dr. Mobilo Aquafest.
            </p>
            <Row style={{ marginBottom: '2rem' }}>
              {shows.map(({ title, artistes, poster, slug }) => (
                <Col key={`${title}`} xs={shows.length > 1 ? 6 : 12} sm={4}>
                  <Link to={slug}>
                    <Margin bottom={{ xs: 3 }}>
                      {poster ? <img src={poster} alt="" /> : <PlaceHolder {...{ title, size: 'small' }} />}
                    </Margin>
                    <p>
                      <Artiste>{artistes.length > 2 ? 'Artistes Variés' : artistes.join(' & ')}</Artiste>
                      <br />
                      <Title>{title}</Title>
                    </p>
                  </Link>
                </Col>
              ))}
            </Row>
            <HTMLContent {...{ content }} />
          </Col>
          <Col xs={12} sm={5} key={name}>
            <Scaphandrier data-image={image}>
              <img src={scaphandrierImg} alt="" />
            </Scaphandrier>
          </Col>
        </Row>
      </Grid>
    </Content>
  </>
);
