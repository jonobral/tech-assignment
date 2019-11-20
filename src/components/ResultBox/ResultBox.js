import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ResultBox.css';

function ResultBox(props) {
  const [text, setText] = useState('');

  useEffect(() => {
    // This will run after initial render has been completed
    const processFormat = () => {
      let newContent = '';
      if (props.selections.length > 0) {
        // First colors are filtered according to the user preferences
        // Then sorting the list of selections to get them in order
        // Finally the app renders all selections made by the user
        let sortedSelections = props.selections.filter(s => props.colors.includes(s.color)).sort((a, b) => (a.start > b.start) ? 1 : -1);
        if (props.sortByColors) {
          // In case of a different sort, we should replace the current sortedSelections object
          sortedSelections = props.selections.filter(s => props.colors.includes(s.color)).sort((a, b) => (a.colorSeq > b.colorSeq) ? 1 : -1);
        }
        
        // Handling formatted content
        let result = '';
        sortedSelections.forEach((element) => {
          result = props.inputContent.substring(element.start, element.end);
          newContent += `<span class="ResultBox-highlighted ResultBox-${element.color}">${result === ' ' ? '&nbsp;' : result}</span>`;
        });
      }
      // Dispatch a local state hook to update the textarea with hightlighted text
      setText(newContent);
    };
    processFormat();
  }, [props.inputContent, props.selections, props.colors, props.sortByColors]);

  return (
    <div className="ResultBox">
      <div className="ResultBox-highlights" 
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: text }}
        data-testid="resultBoxId"
      />
    </div>
  );
}

ResultBox.propTypes = {
	inputContent: PropTypes.string,
  selections: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => ({
  colors: state.resultBox.colors,
  sortByColors: state.resultBox.sortByColors,
  inputContent: state.inputBox.content,
  selections: state.inputBox.selections
});

const ConnectedHResultBox = connect(
  mapStateToProps
)(ResultBox);

export default ConnectedHResultBox;