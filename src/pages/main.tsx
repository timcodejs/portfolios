import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Main = () => {
  return (
    <ListStyled>
      <h2>이태원의 포트폴리오</h2>
      <Stack spacing={2}>
        <Button variant='contained'>
          <Link to='/instaclone/'>인스타그램 클론 코딩</Link>
        </Button>
        <Button variant='contained'>
          <Link to='https://timcodejs.github.io/react-typescript-movie-app/'>
            영화 웹 어플리케이션
          </Link>
        </Button>
      </Stack>
    </ListStyled>
  );
};

export default Main;

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  h2 {
    text-align: center;
  }
  button {
    width: 600px;
    height: 50px;
  }
  a {
    display: block;
    color: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-decoration: none;
  }
`;
