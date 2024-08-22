import "../Button.css";

function ButtonSubmit({ text, handleClick, css }) {
  return (
    <button type="submit" className={`btn ${css}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ButtonSubmit;
