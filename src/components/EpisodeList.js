import React, {useEffect, useState} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

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
  console.log('c', episodes);
  if (!episodes) return <h2>Loading...</h2>;

  return (
    <section className='character-list grid-view'>
      {episodes.map(episode => {
        return <EpisodeCard episode={episode} />;
      })}
    </section>
  );
}
