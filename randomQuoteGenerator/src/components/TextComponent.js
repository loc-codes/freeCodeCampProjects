const TextComponent = (props) => {
    const HeadingType = props.headingTag
    return(
      <div style = {props.styling} id={props.id} className="text-content">
        <HeadingType>{props.content}</HeadingType>
      </div>
    )
  }

export default TextComponent