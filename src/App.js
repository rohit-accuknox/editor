import React from 'react';
import Editor from './Editor';
import "codemirror/lib/codemirror.css";

const App = () => {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div>
      <h2> Editor Sample</h2>
      <Editor name="formula" onChange={onChange} value={'value'} />
    </div>
  );
};
export default App;