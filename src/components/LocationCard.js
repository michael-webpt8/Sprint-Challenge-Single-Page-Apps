import React from 'react';
import {Card, Spinner} from 'react-bootstrap';

export default function LocationCard(
  props,
  {
    id,
    name,
    type,
    dimension
    // residents
  }
) {
  console.log('LC', props.location);
  if (!props.props) return <h1>loading..</h1>;

  return (
    <Card key={id}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {type} {dimension}
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer> Residents {residents.length}</Card.Footer> */}
      {/** !!! could not get want to know why !!! */}
    </Card>
  );
}
