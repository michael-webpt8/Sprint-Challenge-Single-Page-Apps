import React from 'react';

import {Card} from 'react-bootstrap';

export default function CharacterCard(props) {
  const {characters} = props;
  return (
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
  );
}
