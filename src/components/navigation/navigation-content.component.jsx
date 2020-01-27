import React from 'react';
// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Logo from '@components/logo/logo.component';
import CircleIconComponent from '@components/store-icons/circle-icon.component';
import LeafIconComponent from '@components/store-icons/leaf-icon.component';

import LinkComponent from '../link/link.component';
import NAVIGATION_DATA from './navigation.data';
import {
  CloseButton,
  CloseButtonBox,
  Container,
  Nav,
} from './navigation.styled';

const icons = [
  <CircleIconComponent />,
  <LeafIconComponent />,
  <CircleIconComponent />,
];

const NavigationContentComponent = ({ hidden, toggleDrawer }) => (
  <Container>
    <Container padding="1.5rem">
      <Logo color="white" areaLabel="Homepage Semantix" />
    </Container>
    <div className={`navigation${hidden ? '--open' : ''}`}>
      <CloseButtonBox>
        <div onClick={toggleDrawer}>
          <CloseButton />
        </div>
      </CloseButtonBox>
      <Nav>
        {
            NAVIGATION_DATA.map(({ id, label, href }, idx) => (
                <LinkComponent key={id} href={href} label={label}>
                  { icons[idx] }
                </LinkComponent>
            ))
          }
      </Nav>
    </div>
  </Container>
);

NavigationContentComponent.propTypes = {
  hidden:       PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default NavigationContentComponent;
