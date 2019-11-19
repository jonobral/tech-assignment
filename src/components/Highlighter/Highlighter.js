import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../Button/Button'
import * as buttons from '../../actions/buttons';
import * as inputBox from '../../actions/inputBox';
import './Highlighter.css';

function Highlighter(props) {

  const handleClickHighlighter = (color) => {
    // Preventing an user to highlight a text that hasn't been selected yet
    if (!props.inputRef) {
      window.alert('You haven\'t made a selection from the text area');
      return;
    }
    // Preventing an user to highlight a text that is already selected
    //TODO ---

    // Get the current selections in textarea component
    const start = props.inputRef.selectionStart;
    const end = props.inputRef.selectionEnd;
    props.actions.setSelections(color, start, end);
  };

  return (
    <div className="Highlighter">
      <Button color="red" isSelected={props.isRedSelected} handleClick={() => handleClickHighlighter('red')}/>
      <Button color="yellow" isSelected={props.isYellowSelected} handleClick={() => handleClickHighlighter('yellow')}/>
      <Button color="green" isSelected={props.isGreenSelected} handleClick={() => handleClickHighlighter('green')}/>
      <p className="Highlighter-text disable-select">
        {props.text}
      </p>
    </div>
  );
}

Highlighter.propTypes = {
  isRedSelected: PropTypes.bool,
  isYellowSelected: PropTypes.bool,
  isGreenSelected: PropTypes.bool,
  inputContent: PropTypes.string,
  inputRef: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...buttons, ...inputBox}, dispatch)
});

const mapStateToProps = (state) => ({
  isRedSelected: state.buttons.highlighter.isRedSelected,
  isYellowSelected: state.buttons.highlighter.isYellowSelected,
  isGreenSelected: state.buttons.highlighter.isGreenSelected,
  inputContent: state.inputBox.content,
  inputRef: state.inputBox.inputRef
});

const ConnectedHighlighter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Highlighter);

export default ConnectedHighlighter;