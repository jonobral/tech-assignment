import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ResultBox.css';

function ResultBox(props) {
  const [text, setText] = useState('');

  useEffect(() => {
    // This will run after initial render has been completed
    const processFormat = () => {
      // If there are no selections yet, exit routine
      if (props.selections.length === 0) return;
      let newContent = '';
      // First colors are filtered according to the user preferences
      // Then sorting the list of selections to get them in order
      // Finally the app renders all selections made by the user
      const sortedSelections = props.selections.filter(s => props.colors.includes(s.color)).sort((a, b) => (a.start > b.start) ? 1 : -1);
      
      // Handling formatted content
      sortedSelections.forEach((element) => {
        newContent +=
        `<span class="ResultBox-highlighted ResultBox-${element.color}">` + props.inputContent.substring(element.start, element.end) +
        '</span>';
      });
  
      // Dispatch a local state hook to update the textarea with hightlighted text
      setText(newContent);
    };
    processFormat();
  }, [props.inputContent, props.selections, props.colors]);

  return (
    <div className="ResultBox">
      <div className="ResultBox-highlights" 
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

ResultBox.propTypes = {
	outputText: PropTypes.string
};

const mapStateToProps = (state) => ({
  colors: state.resultBox.colors,
  inputContent: state.inputBox.content,
  selections: state.inputBox.selections
});

const ConnectedHResultBox = connect(
  mapStateToProps
)(ResultBox);

export default ConnectedHResultBox;