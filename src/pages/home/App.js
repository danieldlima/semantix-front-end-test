import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import NavigationComponent from '@/components/navigation/navigation.component';
import BarChartComponent from '@/components/charts/bar/bar-chart.component';
import { selectNavigationToggle } from '@/store/navigation/navigation.selector';
import { toggleNavigationHidden } from '@/store/navigation/navigation.actions';

import { Main, ChartsContent } from './app.styled';

const App = ({ hidden, toggleNavigationHidden }) => (
  <>
    <NavigationComponent hidden={hidden} />
    {
      console.log('hidden ->', hidden)
    }
    <Main>
      <button onClick={toggleNavigationHidden}>Click aqui!</button>
      <ChartsContent>
        <BarChartComponent />
        <BarChartComponent />
        <BarChartComponent />
      </ChartsContent>
    </Main>
  </>
);

App.propTypes = {
  hidden:                 PropTypes.bool.isRequired,
  toggleNavigationHidden: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationHidden: () => dispatch(toggleNavigationHidden()),
});

const mapStateToProps = createStructuredSelector({
  hidden: selectNavigationToggle,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
