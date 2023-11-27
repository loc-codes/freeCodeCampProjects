import { useState } from "react";
import Editor from "./Components/Editor";
import Previewer from "./Components/Previewer";
import initialText from "./text";
import { marked } from "marked";
import "./App.css"

function App() {

  const [preview, setPreview] = useState(marked(initialText))

  const updatePreviewer = (text) => {
    setPreview(marked(text))
  }

  return (
    <div className="App">
      <Editor updatePreviewer={updatePreviewer}/>
      <Previewer text={preview}/>
    </div>
  );
}

export default App;
