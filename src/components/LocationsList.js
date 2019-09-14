import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';

import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocations(res.data.results))
      .catch(err => console.log(err));
  }, []);

  if (!locations)
    return (
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  return (
    <div>
      {locations.map(location => {
        return <LocationCard location={location} />;
      })}
    </div>
  );
}
