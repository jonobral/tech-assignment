import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../Button/Button'
import * as buttons from '../../actions/buttons';
import * as inputBox from '../../actions/inputBox';
import './Highlighter.css';

function Highlighter(props) {

  const handleClickHighlighter = (color, seq) => {
    // Preventing an user to highlight a text that hasn't been selected yet
    if (!props.inputRef) {
      window.alert('You haven\'t made a selection from the text area');
      return;
    }

    // Get the current selections in textarea component
    const start = props.inputRef.selectionStart;
    const end = props.inputRef.selectionEnd;
    if (start === end) {
      window.alert('There was no selection made, please select a portion of text');
      return;
    }

    // Preventing an user to highlight a text that is already selected
    const isDuplicatedSelection = props.selections.map(s => s)
      .filter(s => (start > s.start && start < s.end) || (end > s.start && end < s.end)).map(s => s);
    if (isDuplicatedSelection.length > 0) {
      window.alert('Selected text has already been selected, please make a new selection');
      return;
    }
    props.actions.setSelections(color, seq, start, end);
  };

  const clearText = () => {
    props.actions.clearTextAndSelections();
  }

  return (
    <div className="Highlighter">
      <Button color="red" isSelected={props.isRedSelected} handleClick={() => handleClickHighlighter('red', 1)}/>
      <Button color="yellow" isSelected={props.isYellowSelected} handleClick={() => handleClickHighlighter('yellow', 2)}/>
      <Button color="green" isSelected={props.isGreenSelected} handleClick={() => handleClickHighlighter('green', 3)}/>
      <p className="Highlighter-text disable-select">
        {props.text}
      </p>
      <Button color="gray" location="right" handleClick={() => clearText()} text="Clear"/>
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
  inputRef: state.inputBox.inputRef,
  selections: state.inputBox.selections
});

const ConnectedHighlighter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Highlighter);

export default ConnectedHighlighter;