import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Form, Field } from 'react-final-form';
import Dropzone from 'react-dropzone';
import { toBlob } from 'dom-to-image';
import { saveAs } from 'file-saver';

import Layout from '../LayoutBlank';
import {
  Container,
  Button,
  Preview,
  Label,
  UploadZone,
  Guest,
  GuestImage,
  SecondGuestImage,
  Overlay,
  Episode
} from './styles';

import overlaySrc from '../../img/wagner-overlay.png';

const onSubmit = ({ episode, guest }) => {
  toBlob(document.querySelector('#preview-image')).then(blob => {
    saveAs(blob, `wagner-podcast-${episode}-${guest.split(' ').join('-')}.png`);
  });
};

const validate = values => {
  const errors = {};
  if (parseInt(values.episode, 10) <= 0) {
    errors.episode = 'Requis';
  }
  if (!values.guest) {
    errors.guest = 'Requis';
  }

  return errors;
};

export default () => (
  <>
    <Helmet
      title="Wagner - Podcast"
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Arvo',
          // Required for non-tainted use, need to open PR on gatsby-plugin-google-fonts
          crossorigin: 'anonymous'
        }
      ]}
      meta={[
        {
          name: 'robots',
          content: 'noindex, noarchive'
        }
      ]}
    />
    <Layout>
      <Container>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={{ episode: '1', fontSize: 5 }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <Grid fluid>
              <Row>
                <Col xs={2}>
                  <form onSubmit={handleSubmit}>
                    <Field name="episode">
                      {({ input, meta }) => (
                        <div>
                          <Label>
                            Podcast #
                            <input {...input} type="number" placeholder="1" />
                          </Label>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field
                      name="guest"
                      parse={val => val && val.split('\n').join('<br />')}
                      format={val => val && val.split('<br />').join('\n')}
                    >
                      {({ input, meta }) => (
                        <div>
                          <Label>
                            Invité(s)
                            <textarea {...input} placeholder="Invité(s)" rows="4" />
                          </Label>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="fontSize">
                      {({ input, meta }) => (
                        <div>
                          <Label>
                            Format
                            <input {...input} type="range" min="3" max="10" step="0.5" />
                          </Label>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="guestImg">
                      {fieldprops => (
                        <Label>
                          Image Invité #1
                          <Dropzone
                            onDrop={([file]) => {
                              const reader = new FileReader();

                              reader.addEventListener(
                                'load',
                                () => {
                                  fieldprops.input.onChange(reader.result);
                                },
                                false
                              );

                              reader.readAsDataURL(file);
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <UploadZone>
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <span>Drag & Drop ou Click</span>
                                </div>
                              </UploadZone>
                            )}
                          </Dropzone>
                        </Label>
                      )}
                    </Field>
                    <Field name="seconGuestImg">
                      {fieldprops => (
                        <Label>
                          Image Invité #2
                          <Dropzone
                            onDrop={([file]) => {
                              const reader = new FileReader();

                              reader.addEventListener(
                                'load',
                                () => {
                                  fieldprops.input.onChange(reader.result);
                                },
                                false
                              );

                              reader.readAsDataURL(file);
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <UploadZone>
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <span>Drag & Drop ou Click</span>
                                </div>
                              </UploadZone>
                            )}
                          </Dropzone>
                        </Label>
                      )}
                    </Field>
                    <div>
                      <Button type="submit" disabled={submitting || pristine}>
                        Télécharger
                      </Button>{' '}
                      <Button type="button" onClick={form.reset} disabled={submitting || pristine}>
                        Effacer
                      </Button>
                    </div>
                  </form>
                </Col>
                <Col xs={10}>
                  <Preview id="preview-image">
                    <GuestImage url={values.guestImg} second={!!values.seconGuestImg} />
                    <SecondGuestImage url={values.seconGuestImg} />
                    <Overlay src={overlaySrc} alt="" />
                    <Episode>WAGNER #{values.episode}</Episode>
                    <Guest data-fontsize={values.fontSize} dangerouslySetInnerHTML={{ __html: values.guest }} />
                  </Preview>
                </Col>
              </Row>
            </Grid>
          )}
        />
      </Container>
    </Layout>
  </>
);
