import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
	let classes = 'Button';
	if (props.isSelected) {
		classes += ' Button-selected';
	}

  return (
		<button className={classes} style={{'backgroundColor': props.color}} onClick={(e) => props.handleClick(e)} />
  );
}

Button.propTypes = {
	color: PropTypes.string
};

export default Button;