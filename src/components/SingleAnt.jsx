import React from 'react';

const SingleAnt = ({
  name, length, color, weight // eslint-disable-line
}) => (
  <div className="SingleAnt">
    <ul>
      <li>{name}</li>
      <li>{color}</li>
      <li>{weight}</li>
      <li>{length}</li>
    </ul>
  </div>
);

export default SingleAnt;
