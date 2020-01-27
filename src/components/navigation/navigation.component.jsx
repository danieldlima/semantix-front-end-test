import React from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  HeaderMobile,
  CloseButtonBox,
  CloseButton,
} from './navigation.styled';
import NavigationContentComponent from './navigation-content.component';

const NavigationComponent = ({ isOpen, isMobile, toggleDrawer }) => (
  isMobile
    ? (
      <HeaderMobile isOpen={isOpen}>
        <CloseButtonBox onClick={toggleDrawer}>
          <CloseButton />
        </CloseButtonBox>
        <NavigationContentComponent isMobile hidden={isOpen} toggleDrawer={toggleDrawer} />
      </HeaderMobile>
    )
    : (
      <Header>
        <NavigationContentComponent hidden={isOpen} toggleDrawer={toggleDrawer} />
      </Header>
    )
);

NavigationComponent.propTypes = {
  isOpen:       PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isMobile:     PropTypes.bool.isRequired,
};

export default NavigationComponent;
