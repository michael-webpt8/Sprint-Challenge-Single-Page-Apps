import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Card} from 'react-bootstrap';

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
  if (!characters) return <h2>Loading...</h2>;

  return (
    <section className='character-list grid-view'>
      {characters.map(character => (
        <Card key={character.created}>
          <Card.Img src={character.image} alt={character.name} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Subtitle>
              {character.species} {character.status}
            </Card.Subtitle>
            <Card.Text>Location: {character.location.name}</Card.Text>
            <Card.Text>Origin: {character.origin.name}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}
