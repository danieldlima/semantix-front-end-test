import React from 'react';
import { Line } from 'react-chartjs-2';

import { chartBarAPI } from '@/services/api';
import { Container, ContentBox, Title } from "../chart.styled";

import { data, options } from "../chart.config";

// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

export default class LinesChartComponent extends React.Component {
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
    const response = await chartBarAPI.get('/time-data');
    this.setState({ annualResultGraph: response.data });
  };

  render () {
    const { annualResultGraph } = this.state;
    let resultDataToday = annualResultGraph.today;
    let resultDataYesterday = annualResultGraph.yesterday;

    let data = [
      {
        resultDataToday,
        resultDataYesterday
      }
    ]
        // .filter((item, idx) => idx < 7)
        // .map(item => item);
    console.log('annualResultGraph ->', annualResultGraph)
    console.log('resultDataToday ->', resultDataToday)
    console.log('resultDataYesterday ->', resultDataYesterday)
    //
    // let dataLinesChart = data;
    // dataLinesChart.labels = resultData.map((result) => result.label);
    // dataLinesChart.datasets[0].data = resultData.map((result) => result.value);

    return (
        <Container>
          <Title>Lines CHART</Title>
          <ContentBox>
            <Line data={data} />
          </ContentBox>
        </Container>
    );
  }
};

// PieChartComponent.propTypes = { };

// PieChartComponent.defaultProps = { };
