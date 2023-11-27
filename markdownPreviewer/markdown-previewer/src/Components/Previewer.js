import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Previewer = (props) => {
    return (
    <div id="previewContainer">
      <h3 className="title" id="preview-title">
      <FontAwesomeIcon icon={faMagnifyingGlass}/> Previewer
      </h3>
      <div id="preview" dangerouslySetInnerHTML={{ __html: props.text }}></div>
    </div>
    )
}

export default Previewer
