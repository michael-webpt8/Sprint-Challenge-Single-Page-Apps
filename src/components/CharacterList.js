import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({});
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      // res.data.results
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log('c', characters);
  return (
    <section className='character-list grid-view'>
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
