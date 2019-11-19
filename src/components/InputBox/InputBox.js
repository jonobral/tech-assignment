import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as inputBox from '../../actions/inputBox';
import * as buttons from '../../actions/buttons';
import './InputBox.css';

function InputBox(props) {
  const inputRef = React.createRef();
  const highlightsRef = React.createRef();
  
  const [text, setText] = useState(props.inputContent);
  
  const handleChange = (e) => {
    // Dispatch an action to save the text in the store
    props.actions.setInputContent(e.target.value);
  }
  
  const handleSelection = (e) => {
    // This action will save current input reference to access selections props
    props.actions.setInputRef(inputRef.current);
    // Dispatch an action to save the text in the store
    props.actions.setInputContent(e.target.value);
  }

  const handleScroll = () => {
    var scrollTop = inputRef.current.scrollTop;
    highlightsRef.current.scrollTo(0, scrollTop);
  }
  
  useEffect(() => {
    // This will run after initial render has been completed
    const processFormat = () => {
      
      let newContent = '';

      if (props.selections.length > 0) {
        // Sort the list of selections to get them in order
        const sortedSelections = props.selections.sort((a, b) => (a.start > b.start) ? 1 : -1);
        // Start of formatted content
        let start = 0;
        if (sortedSelections.length > 0) {
          start = sortedSelections[0].start;
          newContent = props.inputContent.substring(0, start);
        }
        // Handling formatted content
        sortedSelections.forEach((element, index) => {
          newContent += `<span class=InputBox-${element.color}>${props.inputContent.substring(element.start, element.end)}</span>`;
          if (sortedSelections[index + 1]) {
            // Getting next non-formatted block until next selection
            newContent += props.inputContent.substring(element.end, sortedSelections[index + 1].start);
          }
        });
    
        // End of formatted content
        if (sortedSelections.length > 0) {
          newContent += props.inputContent.substring(sortedSelections[sortedSelections.length - 1].end);
        }
      }
  
      // Dispatch a local state hook to update the textarea with hightlighted text
      setText(newContent);
    };
    processFormat();
  }, [props.selections, props.inputContent]);

  return (
    <div className="InputBox">
      <div className="InputBox-backdrop" ref={highlightsRef}>
        <div className="InputBox-highlights" 
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: text }}
          data-testid="highlightsId"
        />
      </div>
      <textarea className="InputBox-textarea"
        onChange={handleChange}
        value={props.inputContent}
        ref={inputRef}
        placeholder="<Enter or copy text into this input area>"
        onMouseUp={handleSelection}
        onScroll={handleScroll}
      />
    </div>
  );
}

InputBox.propTypes = {
  inputContent: PropTypes.string,
  selections: PropTypes.arrayOf(PropTypes.object)
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...inputBox, ...buttons}, dispatch)
});

const mapStateToProps = (state) => ({
  inputContent: state.inputBox.content,
  selections: state.inputBox.selections
});

const ConnectedInputBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox);

export default ConnectedInputBox;