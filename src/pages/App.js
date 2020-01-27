import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import NavigationComponent from '@/components/navigation/navigation.component';
import { selectNavigationToggle } from '@/store/navigation/navigation.selector';
import { toggleNavigationHidden } from '@/store/navigation/navigation.actions';

import HomePage from './home/Home.page';
import Page2 from './page2/page2.page';
import { Main } from './app.styled';

const App = ({ hidden, toggleNavigationHidden }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        setWidth(window.innerWidth);
      }, 200),
    );
  }, []);

  return (
    <>
      <NavigationComponent
        isMobile={width <= 1279}
        isOpen={!hidden}
        hidden={hidden}
        toggleDrawer={toggleNavigationHidden}
      />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </Main>
    </>
  );
};

App.propTypes = {
  toggleNavigationHidden: PropTypes.func.isRequired,
  hidden:                 PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationHidden: () => dispatch(toggleNavigationHidden()),
});

const mapStateToProps = createStructuredSelector({
  hidden: selectNavigationToggle,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
