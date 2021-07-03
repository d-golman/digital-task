import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
text-align: center;
padding: 20px;
margin-top: 60px; 
background: #FFD369;
width: 100%;
a{
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
}
`;


const Footer = () => {
  return (
    <FooterBlock>
      <a target="_href" href='https://github.com/d-golman'>&copy; Golman Danil</a>
    </FooterBlock>
  );
};


export default Footer;
