/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LayoutNav = ({ children }: React.PropsWithChildren) => {
  return (
    <NavStyled>
      <div className='navdiv'>
        <h1>lee taewon</h1>
        <p>xodnjs479@gmail.com</p>
        <ul>
          <li>
            <a href='https://github.com/timcodejs'>Github</a>
          </li>
          <li>
            <a href='https://velog.io/@timcodejs'>Velog</a>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
        </ul>
        <div className='skill'>
          <h3>Skills</h3>
          <p>HTML5, CSS3, JavaScript</p>
          <p>React, Redux</p>
          <p>ES6+, TypeScript</p>
          <p>styled-components</p>
          <p></p>
        </div>
      </div>
      {children}
    </NavStyled>
  );
};

export default LayoutNav;

const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  .navdiv {
    margin: 0 5%;
  }
  h1 {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .skill p {
    padding: 0;
    margin: 0;
  }
  a {
    color: #000;
  }
`;
