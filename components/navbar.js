import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
text-align: center;
padding: 20px;
background: #FFD369;
position: sticky;
top:0;
width: 100%;
z-index: 10;
a,h1{
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: all 0.25s;
  &:hover{
    text-shadow: 0px 0px 5px rgba(0,0,0, 0.3);
  }
}
p{
  display: block;
  position: absolute;
  right: 30px;
  top: 30%;
  font-size: 2rem;
  color: #333;
  border: 4px solid #333;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  cursor: pointer;
}
`;

const Navbar = () => {
  return (
    <Nav>
      <Link shallow scroll={false} href='/'><a><h1>Game Base</h1></a></Link>
      <p onClick={() => window.scrollTo(0, 0)}>&#11014;</p>
    </Nav>
  );
};

export default Navbar;
