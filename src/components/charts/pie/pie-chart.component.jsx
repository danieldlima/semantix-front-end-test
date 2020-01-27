import React from 'react';
import { Pie } from 'react-chartjs-2';

import { chartPieAPI } from '@/services/api';
import { Container, ContentBox, Title } from "../chart.styled";

// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

export default class PieChartComponent extends React.Component {
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
    const response = await chartPieAPI.get('/anual-percentage');
    this.setState({ annualResultGraph: response.data });
  };

  render () {
    const { annualResultGraph } = this.state;
    let resultData = annualResultGraph
        .filter((item, idx) => idx < 6)
        .map(item => item);

    let dataPieChart = {
      labels: resultData.map((result) => result.label),
      datasets: [{
        label: "Pie Chart",
        borderWidth: 0,
        backgroundColor: [
          '#2C82BE',
          '#32B88B',
          '#ABE1FA'
        ],
        data: resultData.map((result) => result.value),
      }]
    };
    let options = {
      legend: {
        textDirection: 'ltr',
        rtl: false,
        position: 'top',
        align: 'end',
        offset: true,
        labels: {
          boxWidth: 12,
          padding: 15,
        },
      },
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 30
        }
      },
      tooltips: {
        backgroundColor: 'rgba(72,84,101,0.9)',
        titleFontColor: 'rgba(155,155,155,1)',
        bodyFontColor: 'rgba(239,244,253, 1)',
        bodyFontStyle: 'bold',
        borderWidth: 0,
        xPadding: 12,
        yPadding: 12,
        caretSize: 8,
        callbacks: { }
      }
    };

    return (
        <Container>
          <Title>Pie CHART</Title>
          <ContentBox>
            <Pie data={dataPieChart} options={options} />
          </ContentBox>
        </Container>
    );
  }
};

// PieChartComponent.propTypes = { };

// PieChartComponent.defaultProps = { };
