import React from 'react';
import { Bar } from 'react-chartjs-2';

import { chartBarAPI } from '@/services/api';

// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

export default class BarChartComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      annualResultGraph: []
    };
  }

  componentDidMount () {
    this.loadGraphicResult()
        .catch(err => console.error('loadGraphicResult >', err));
  }

  loadGraphicResult = async () => {
    const response = await chartBarAPI.get('/anual-result');
    this.setState({ annualResultGraph: response.data });
  };

  render () {
    const { annualResultGraph } = this.state;

    let data = {
      labels: annualResultGraph.map((result) => result.label),
      datasets: [{
        label: "Bars Chart",
        backgroundColor: 'rgba(3, 169, 244, 1)',
        borderColor: 'rgba(3, 124, 197, 1)',
        data: annualResultGraph.map((result) => result.value)
      }],
    };

    return (
      <Bar data={data} />
    );
  }
};

// BarChartComponent.propTypes = { };

// BarChartComponent.defaultProps = { };
