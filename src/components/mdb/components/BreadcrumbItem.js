import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class BreadcrumbItem extends Component {

  render() {
    const {
      className,
      active,
      ...attributes
    } = this.props;


    const classes = classNames(
      active ? 'active' : false,
      'breadcrumb-item',
      className
    );

    return (
      <li {...attributes} className={classes}>
        {this.props.children}
      </li>
    );
  }
}

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default BreadcrumbItem;
