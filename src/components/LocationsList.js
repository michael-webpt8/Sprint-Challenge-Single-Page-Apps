import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import LocationCard from './LocationCard';

export default function LocationsList(props) {
  const [locations, setLocations] = useState();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocations(res.data.results))
      .catch(err => console.log(err));
  }, []);

  if (!locations)
    return (
      <LoadingWrapper>
        <LoadingSpinner color='primary' animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </LoadingSpinner>
      </LoadingWrapper>
    );
  return (
    <Container>
      <Row>
        {locations.map(location => {
          return (
            <Col sm='12' md='6' lg='3'>
              <LocationCard location={location} />;
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

const LoadingWrapper = styled(Spinner)`
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
`;

const LoadingSpinner = styled(Spinner)`
  width: 4rem;
  height: 4rem;
`;
