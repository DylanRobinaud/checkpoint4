import "./text.css";

function H2Component({ subtitle1, css }) {
  return <h2 className={`style-h2 ${css}`}>{subtitle1}</h2>;
}

export default H2Component;
