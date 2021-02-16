import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import styled from 'styled-components';

export default function WelcomePage() {
  return (
    <WelcomeWrapper className='welcome-page'>
      <header>
        <WelcomeH1>Welcome to the ultimate fan site!</WelcomeH1>
        <Link to='/characters'>
          <img
            className='main-img ui centered medium circular image'
            src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            alt='rick'
          />
        </Link>
      </header>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.section`
  margin-top: 35px;
`;

const WelcomeH1 = styled.h1`
  color: #97d7d7;
  font-size: 3.2rem;
`;
