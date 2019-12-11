import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Center = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Layout>
    <Center>
      <h1>NON</h1>
    </Center>
  </Layout>
);
