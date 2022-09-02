import React, { useState } from "react";
import CodeMirror from 'react-codemirror';
import './App.css'
import "codemirror/theme/material.css";

const Editor = ({ value, onChange, name }) => {
  // const [disable,setDisable] = useState(false)
  return (
    <div className="editor">
      {/* <button onClick={()=>setDisable(!disable)}>Disable</button> */}
      <CodeMirror
        value="console.log('hello world!');"
        onChange={onChange}
        name={name}
        options={{
          lineNumbers: true,
          // mode: { name: "yaml", globalVars: true },
          tabSize: 2,
          readOnly: false,
          smartIndent: true,
          matchBrackets: true,
          mode:'yaml',
          // theme: disable? 'material' :'default',
          // readOnly:disable
          // lintOnChange: true
          // extraKeys: {
          //   "Ctrl-Space": autoComplete
          // }
        }}
      />
    </div>
  );
};

export default Editor;
