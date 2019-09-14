import React from 'react';

import {Card} from 'react-bootstrap';

export default function EpisodeCard(props) {
  const {episode} = props;
  return (
    <Card key={episode.created}>
      <Card.Body>
        <Card.Title>{episode.name}</Card.Title>

        <Card.Text>Episode: {episode.episode}</Card.Text>
      </Card.Body>
    </Card>
  );
}
