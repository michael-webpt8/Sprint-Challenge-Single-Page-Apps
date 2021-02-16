import React from 'react';

import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export default function CharacterCard(props) {
  const { character } = props;

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

  const lifeStatus = livingStatus(character.status);

  return (
    <CharacterCardDisplay key={character.created}>
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
    </CharacterCardDisplay>
  );
}

const CharacterCardDisplay = styled(Card)`
  margin-bottom: 30px;
  border: 2px solid grey;
  border-radius: 10px;
`;
