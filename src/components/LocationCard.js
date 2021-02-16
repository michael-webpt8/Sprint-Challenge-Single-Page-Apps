import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
export default function LocationCard(props) {
  const { id, name, type, dimension, residents } = props.location;

  if (!props.location) return <h1>loading..</h1>;

  return (
    <CardWrapper key={id}>
      <Card.Body>
        <Card.Text>{name}</Card.Text>
        <Card.Text>
          {type} {dimension}
        </Card.Text>
      </Card.Body>
      <FooterText>
        {' '}
        <ResidentCount>Residents {residents.length}</ResidentCount>
      </FooterText>
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)`
  margin-bottom: 20px;
  width: 50%;
`;

const FooterText = styled(Card.Text)`
  text-align: right;
  padding: 5px;
`;

const ResidentCount = styled.span`
  background-color: lightgray;
  margin-right: -6px;
  margin-bottom: -1px;
  padding: 10px 10px 6px 10px;
`;
