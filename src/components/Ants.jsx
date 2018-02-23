import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import Calculator from './Calculator';
import SingleAnt from './SingleAnt';

function Ants({ data: { ants } }) { // eslint-disable-line
  return (
    <div className="Ants">
        Ants
      <ul>{ants && ants.map((ant, i) =>
        (<SingleAnt
          key={i}
          name={ant.name}
          length={ant.length}
          color={ant.color}
          weight={ant.weight} />))}
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
