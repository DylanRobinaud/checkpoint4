import "../Button.css";

function ButtonComponent({ text, handleClick, css }) {
  return (
    <button type="button" className={`btn ${css}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;
