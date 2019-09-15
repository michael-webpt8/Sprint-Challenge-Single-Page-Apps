import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Spinner } from 'reactstrap';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=1`)
      // res.data.results
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log('c', characters);

  if (!characters)
    return (
      <LoadingWrapper>
        <LoadingSpinner color='primary' animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </LoadingSpinner>
      </LoadingWrapper>
    );

  return (
    <section className='character-list grid-view'>
      {characters.map(character => (
        <CharacterCard character={character} />
      ))}
    </section>
  );
}

const LoadingWrapper = styled.div`
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
