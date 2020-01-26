import React from 'react';
import { Bar } from 'react-chartjs-2';

import { chartBarAPI } from '@/services/api';
import { Container, ContentBox, Title } from "./bar-chart.styled";

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
    let resultData = annualResultGraph
        .filter((item, idx) => idx < 6)
        .map(item => item);

    // height: labels.length * 12 + 24,
    let data = {
      labels: resultData.map((result) => result.label),
      datasets: [{
        label: "Bars Chart",
        backgroundColor: 'rgba(3, 169, 244, 1)',
        borderColor: 'rgba(3, 124, 197, 1)',
        barPercentage: 1,
        data: resultData.map((result) => result.value)
      }]
    };
    let options = {
      legend: false,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 10
        }
      },
      scales: {
        xAxes: [{
          maxBarThickness: 40,
        }]
      },
      tooltips: {
        backgroundColor: 'rgba(244,246,249,1)',
        titleFontColor: 'rgba(155,155,155,1)',
        bodyFontColor: 'rgba(155,155,155,1)',
        displayColors: false,
        bodyFontStyle: 'bold',
        borderWidth: 1,
        borderColor: 'rgba(216,221,230,1)',
        xPadding: 12,
        yPadding: 12,
        callbacks: {
          title: () => '',
          label: tooltipItem => {
          let label = '';

          if (label) label += ': ';

          label += Math.round(tooltipItem.yLabel * 100) / 100;
          return label;
        }
      }
    }
  };

    return (
        <Container>
          <Title>BARS CHART</Title>
          <ContentBox>
            <Bar data={data} options={options} />
          </ContentBox>
        </Container>
    );
  }
};

// BarChartComponent.propTypes = { };

// BarChartComponent.defaultProps = { };
