import React from 'react';

import NavigationComponent from '@/components/navigation/navigation.component';
import BarChartComponent from '@/components/charts/bar/bar-chart.component';
import { Main, ChartsContent } from "./app.styled";

const App = () => (
  <>
    <NavigationComponent />
    <Main>
      <ChartsContent>
        <div>
          <div>
            <BarChartComponent />
          </div>
        </div>

        <div>
          <div>
            <BarChartComponent />
          </div>
        </div>

        <div>
          <div>
            <BarChartComponent />
          </div>
        </div>
      </ChartsContent>
    </Main>
  </>
);

export default App;
