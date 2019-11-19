import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../Button/Button'
import * as buttons from '../../actions/buttons';
import * as resultBox from '../../actions/resultBox';
import './Filter.css';

function Filter(props) {

  const handleRedClick = (color) => {
    props.actions.setRedSelected(props.componentType, !props.isRedSelected);
    if (props.isRedSelected) {
      // Dispatch an action to delete all yellow selections
      props.actions.deleteSelection(color);
    } else {
      // Dispatch an action to show all red selections
      props.actions.showSelections(color);
    }
  };
  const handleYellowClick = (color) => {
    props.actions.setYellowSelected(props.componentType, !props.isYellowSelected);
    if (props.isYellowSelected) {
      // Dispatch an action to delete all yellow selections
      props.actions.deleteSelection(color);
    } else {
      // Dispatch an action to show all yellow selections
      props.actions.showSelections(color);
    }
  };
  const handleGreenClick = (color) => {
    props.actions.setGreenSelected(props.componentType, !props.isGreenSelected);
    if (props.isGreenSelected) {
      // Dispatch an action to delete all green selections
      props.actions.deleteSelection(color);
    } else {
      // Dispatch an action to show all green selections
      props.actions.showSelections(color);
    }
  };
  
  const sortSelections = () => {
    props.actions.sortSelections();
  }

  return (
    <div className="Filter">
      <Button color="red" isSelected={props.isRedSelected} handleClick={() => handleRedClick('red')}/>
      <Button color="yellow" isSelected={props.isYellowSelected} handleClick={() => handleYellowClick('yellow')}/>
      <Button color="green" isSelected={props.isGreenSelected} handleClick={() => handleGreenClick('green')}/>
      <p className="Filter-text disable-select">
        {props.text}
      </p>
      <Button color="gray" location="right" handleClick={() => sortSelections()} text="Sort"/>
    </div>
  );
}

Filter.propTypes = {
	text: PropTypes.string
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...buttons, ...resultBox}, dispatch)
});

const mapStateToProps = (state) => ({
  isRedSelected: state.buttons.filter.isRedSelected,
  isYellowSelected: state.buttons.filter.isYellowSelected,
  isGreenSelected: state.buttons.filter.isGreenSelected
});

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default ConnectedFilter;