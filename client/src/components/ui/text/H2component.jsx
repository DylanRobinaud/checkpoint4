import "./text.css";

function H2Component({ title2, css }) {
  return <h2 className={`style-h2 ${css}`}>{title2}</h2>;
}

export default H2Component;
