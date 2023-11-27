import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareComponent = (props) => {
    return (<span className ="inline">
      <a id={props.linkId} className="share" href={props.link} target="_blank">
        <FontAwesomeIcon icon={props.iconId} style={props.styling} />
      </a>
    </span>)
  }

export default ShareComponent