import "./Button.scss";

function Button(props) {
  return (
    <button 
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}

export default Button;