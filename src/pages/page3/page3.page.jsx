import React from 'react';

import { ChartsContent, Title } from './page3.styled';
import LinesChartComponent from "@/components/charts/lines/lines-chart.component";

const Page3Page = () => (
  <>
    <Title>
      Page 3
    </Title>
    <ChartsContent>
      <LinesChartComponent screenSize="md" />
    </ChartsContent>
  </>
);

export default Page3Page;
