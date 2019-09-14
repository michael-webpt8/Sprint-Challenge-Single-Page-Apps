import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';

import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/?page=1')
      .then(res => setLocations(res.data.results))
      .catch(err => console.log(err));
  }, []);
  console.log('l', locations);
  if (!locations)
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  return (
    <div>
      <h1>Location Lis</h1>
      <div>
        {locations.map(location => {
          return <LocationCard location={location} />;
        })}
      </div>
    </div>
  );
}
