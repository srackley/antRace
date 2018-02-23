import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import Calculator from './Calculator';

function Ants({ data: { ants } }) {
  return (
    <div className="Ants">
        Ants
      <ul>{ants && ants.map(ant =>
        <li key={ant.name}>{ant.name}</li>)}
      </ul>
      <Calculator status="Complete" />
    </div>
  );
}

const query = gql`
  {
    ants {
      name
      length
      color
      weight
    }
  }
`;

export default graphql(query)(Ants);
