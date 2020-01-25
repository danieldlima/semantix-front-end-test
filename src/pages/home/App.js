import React from 'react';

import NavigationComponent from '@/components/navigation/navigation.component';
import BarChartComponent from '@/components/charts/bar/bar-chart.component';

import './App.css';

const App = () => (
  <>
    <NavigationComponent />
    <main>
      <BarChartComponent />
    </main>
  </>
);

export default App;
