import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Error404 = styled.h1`
color: #eee;
text-align: center;
display: block;
margin-top: 20px
`;

const Error = () => {
  return (
    <Layout>
      <Error404>Error 404</Error404>
    </Layout>
  );
};

export default Error;
