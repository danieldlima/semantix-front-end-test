import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

const LinkComponent = ({ children, href, label, toggleDrawer }) => (
  <Link to={href} title={label} onClick={toggleDrawer} >
    {children}
    <div>{label}</div>
  </Link>
);

LinkComponent.propTypes = {
  children: PropTypes.element.isRequired,
  href:     PropTypes.string,
  label:    PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func,
};

LinkComponent.defaultProps = {
  href: '/',
};

export default LinkComponent;
