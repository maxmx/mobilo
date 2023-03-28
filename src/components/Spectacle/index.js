import React from 'react';
import Palette from 'react-palette';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import PlaceHolder from '../Home/placeholder';

import { HTMLContent } from '../Content';

import Background from './background';
import { Artistes, TicketContainer, Ticket, TicketDay } from './styles';

export default ({ title, scene, artistes = [], dates = [], content, poster }) => {
  const renderedPoster = poster || '/img/poster-aquafest-2020.png';
  return (
    <Background poster={renderedPoster}>
      <Grid>
        <Row middle="sm" style={{ height: '60vh', minHeight: 'min-content' }}>
          <Col xs={12} style={{ padding: 0 }}>
            <Row style={{ margin: 'auto' }}>
              <Col xs={12} sm={5} md={4}>
                <Margin bottom={{ xs: 4 }}>
                  {poster ? <img src={renderedPoster} alt="" /> : <PlaceHolder {...{ title }} />}
                </Margin>
              </Col>
              <Col xs={12} xsOffset={0} mdOffset={1} sm={6} md={7}>
                <Row>
                  <Col xs={12} md={artistes.length > 2 ? 12 : 6}>
                    <Artistes>{artistes.join(', ')}</Artistes>
                  </Col>
                </Row>
                <Palette image={renderedPoster}>
                  {palette => (
                    <>
                      <h1 style={{ color: palette.lightMuted }}>{title}</h1>
                    </>
                  )}
                </Palette>
                <Margin bottom={{ xs: 5 }}>
                  <HTMLContent {...{ content }} />
                </Margin>
                <Palette image={renderedPoster}>
                  {palette => (
                    <>
                      <h3 style={{ color: palette.lightVibrant }}>Billets</h3>
                      {dates.map(({ date, billet, badge }) => (
                        <TicketContainer key={date} between="xs">
                          <Col>
                            {badge && (
                              <>
                                <span style={{ color: 'rgb(225 145 125)' }}>{badge}</span>
                                <br />
                              </>
                            )}
                            {scene}
                            <br />
                            <TicketDay>{format(date, 'dddd D MMMM YYYY HH:mm', { locale })}</TicketDay>
                          </Col>
                          <Col>
                            <Ticket href={billet} style={{ background: palette.darkVibrant }}>
                              Acheter
                            </Ticket>
                          </Col>
                        </TicketContainer>
                      ))}
                    </>
                  )}
                </Palette>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Background>
  );
};
