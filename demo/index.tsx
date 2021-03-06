import React from 'react';
const { useState } = React;
import ReactDOM from 'react-dom';
import { Editor, EditorState } from '../src/index';

import './style.css';

function App() {
  const [state, setState] = useState(EditorState.create());

  function handleBeforeChange(nextState: EditorState) {
    return nextState;
  }

  return (
    <Editor
      state={state}
      onChange={setState}
      onBeforeChange={handleBeforeChange}
      placeholder="Write a novel..."
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
