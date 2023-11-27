import initialText from "../text"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';


const Editor = (props) => {

    const handleChange = (event) => {
        props.updatePreviewer(event.target.value)
    }


    return (
    <div id="editorContainer">
      <h3 className ="title" id="editor-title">
        <FontAwesomeIcon icon={faPenToSquare} /> Editor
      </h3>
      <textarea defaultValue={initialText} onChange={handleChange} id="editor" placeholder="Type some markdown"></textarea>
    </div>
    )
}

export default Editor