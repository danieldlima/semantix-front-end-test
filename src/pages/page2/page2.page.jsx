import React from 'react';

import { ChartsContent, Title } from './page2.styled';
import LinesChartComponent from "../../components/charts/lines/lines-chart.component";

const Page2Page = () => (
  <>
    <Title>
      Page 2
    </Title>
    <ChartsContent>
      <LinesChartComponent />
    </ChartsContent>
  </>
);

export default Page2Page;
