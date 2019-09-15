import React from 'react';

import { Card } from 'react-bootstrap';

export default function CharacterCard(props) {
  const { character } = props;
  console.log('c', character);

  const { status } = character;
  console.log('S', status);

  function livingStatus(status) {
    let mortalityStatus = '';
    if (status === 'Alive') {
      mortalityStatus = 'status-living';
    } else if (status === 'Dead') {
      mortalityStatus = 'status-dead';
    } else if (status === 'uknown') {
      mortalityStatus = 'status-unknown';
    }
    return mortalityStatus;
  }

  console.log();

  const lifeStatus = livingStatus(character.status);

  return (
    <Card key={character.created}>
      <Card.Img src={character.image} alt={character.name} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Subtitle>
          {character.species}{' '}
          <span className={lifeStatus}>{character.status}</span>
        </Card.Subtitle>
        <Card.Text>Location: {character.location.name}</Card.Text>
        <Card.Text>Origin: {character.origin.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
