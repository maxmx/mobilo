import React from 'react';
import Palette from 'react-palette';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import { HTMLContent } from '../Content';

import Background from './background';
import { Artistes, TicketContainer, Ticket, TicketDay } from './styles';

export default ({ title, scene, artistes = [], dates = [], content, poster }) => (
  <Background {...{ poster }}>
    <Grid>
      <Row middle="sm" style={{ height: '60vh', minHeight: 'min-content' }}>
        <Col xs={12} style={{ padding: 0 }}>
          <Row style={{ margin: 'auto' }}>
            <Col xs={12} sm={4}>
              <Margin bottom={{ xs: 4 }}>
                <img src={poster} alt="" />
              </Margin>
            </Col>
            <Col xs={12} xsOffset={0} smOffset={1} sm={7}>
              <Row>
                <Col xs={12} md={artistes.length > 2 ? 12 : 6}>
                  <Artistes>{artistes.join(', ')}</Artistes>
                </Col>
              </Row>
              <Palette image={poster}>
                {palette => (
                  <>
                    <h1 style={{ color: palette.vibrant }}>{title}</h1>
                  </>
                )}
              </Palette>
              <Margin bottom={{ xs: 5 }}>
                <HTMLContent {...{ content }} />
              </Margin>
              <Palette image={poster}>
                {palette => (
                  <>
                    <h3 style={{ color: palette.lightVibrant }}>Billets</h3>
                    {dates.map(({ date, billet }) => (
                      <TicketContainer key={date} between="xs">
                        <Col>
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
