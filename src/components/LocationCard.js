import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
export default function LocationCard(props) {
  const { id, name, type, dimension, residents } = props.location;

  if (!props.location) return <h1>loading..</h1>;

  return (
    <CardWrapper key={id}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {type} {dimension}
        </Card.Text>
      </Card.Body>
      <Card.Footer> Residents {residents.length}</Card.Footer>
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)`
  margin-bottom: 20px;
`;
