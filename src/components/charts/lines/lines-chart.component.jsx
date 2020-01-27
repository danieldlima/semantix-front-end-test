import React from 'react';
import { Line } from 'react-chartjs-2';

import { chartBarAPI } from '@/services/api';
import { Container } from "./lines-chart.styled";
import { ContentBox, Title } from "../chart.styled";
import { dataConfig as config, options as opt } from "./lines-charts.config";

// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

export default class LinesChartComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      annualResultGraph: [],
      today: '',
      yesterday: '',
    };
  }

  componentDidMount () {
    this.loadGraphicResult()
        .catch(err => console.error('loadGraphicResult >', err));
  }

  loadGraphicResult = async () => {
    const response = await chartBarAPI.get('/time-data')
    this.setState({ annualResultGraph: response.data }, () => {
      this.setState({ today: response.data.today });
      this.setState({ yesterday: response.data.yesterday });
    });
  };

  render () {
    const { today, yesterday } = this.state;

    let dataToday = { labels: [], values: [] };
    let dataYesterday = { labels: [], values: [] };

    for (let results in today) {
      if(today.hasOwnProperty(results) && yesterday.hasOwnProperty(results)) {
        // TODAY
        dataToday.labels.push(today[results].label);
        dataToday.values.push(today[results].value);

        // Yesterday
        dataYesterday.labels.push(yesterday[results].label);
        dataYesterday.values.push(yesterday[results].value);
      }
    }

    let dataConfig = config;
    dataConfig.labels = dataToday.labels;
    dataConfig.datasets[0].data = dataToday.values;
    dataConfig.datasets[1].data = dataYesterday.values;


    return (
        <Container className={`screen${this.props.screenSize === 'md' ? '--md' : ''}`}>
          <Title>Lines CHART</Title>
          <ContentBox>
            <Line data={dataConfig} options={opt} />
          </ContentBox>
        </Container>
    );
  }
};

// PieChartComponent.propTypes = { };

// PieChartComponent.defaultProps = { };
