import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({
  children, className, icon, image, primary, accent, ...restProps
}) {
  return (
    <button
      className={`button-component ${className || ''}${icon ? ' -icon' : ''}${image ? ' -image' : ''}${primary ? ' -primary' : ''}${accent ? ' -accent' : ''}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.bool,
  image: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
};

Button.defaultProps = {
  type: 'string',
  className: '',
  icon: false,
  image: false,
  primary: false,
  accent: false,
};

export default Button;
