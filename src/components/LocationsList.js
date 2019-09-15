import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

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
    <div>
      {locations.map(location => {
        return <LocationCard location={location} />;
      })}
    </div>
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
