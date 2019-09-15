import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import EpisodeCard from './EpisodeCard';
import { Spinner } from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      // res.data.results
      .then(res => setEpisodes(res.data.results))
      .catch(err => console.log(err));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  if (!episodes)
    return (
      <LoadingWrapper>
        <LoadingSpinner color='primary' animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </LoadingSpinner>
      </LoadingWrapper>
    );

  return (
    <section className='character-list grid-view'>
      {episodes.map(episode => {
        return <EpisodeCard episode={episode} />;
      })}
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
