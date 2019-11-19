import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
	let classes = 'Button';
	if (props.isSelected) {
		classes += ' Button-selected';
	}
	if (props.location === 'right') {
		classes += ' Button-misc';
	}

  return (
		<button className={classes} data-testid="buttonId" style={{'backgroundColor': props.color}} onClick={(e) => props.handleClick(e)}>
			<p>{props.text}</p>
		</button>
  );
}

Button.propTypes = {
	color: PropTypes.string,
	isSelected: PropTypes.bool
};

export default Button;