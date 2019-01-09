import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';

import './index.less'
class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  componentDidMount() {
    const { content } = this.props;
    if (content) {
      const contentState = convertFromRaw(JSON.parse(content));
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
  }

  render() {
    const {
    content,
      editable
  } = this.props

    return (
      < main
        className='rich-editor-wrapper'
        style={this.props.style}
      >
      {editable && 
        <header>
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        </header>
      }
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          editable={editable}
        />
      </main >
    )
  }
}

RichEditor.defaultProps = {
  content: '',
  style: {},
  editable: true,
}

RichEditor.propTypes = {
  content: PropTypes.string,
  style: PropTypes.object,
  editable: PropTypes.bool,
}

export default RichEditor
