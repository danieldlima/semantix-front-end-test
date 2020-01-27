import React from 'react';

import BarChartComponent from '@/components/charts/bar/bar-chart.component';
import PieChartComponent from '@/components/charts/pie/pie-chart.component';

import { ChartsContent, Title } from './home.styled';

const HomePage = () => (
  <>
    <Title>
      Page 1
    </Title>
    <ChartsContent>
      <BarChartComponent />
      <PieChartComponent />
    </ChartsContent>
  </>
);

export default HomePage;
