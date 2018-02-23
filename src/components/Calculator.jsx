import React from 'react';

function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return function (callback) {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Calculator">
      Calculator
      </div>
    );
  }
}
