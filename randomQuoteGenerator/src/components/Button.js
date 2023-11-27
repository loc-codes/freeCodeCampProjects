const Button = (props) => {
    return (
      <span className ="inline"><button style={props.styling} id = {props.id} onClick={props.onClick}>{props.name}</button></span>
    )
  }

export default Button