import "./text.css";

function H1Component({ title1, css }) {
  return <h1 className={`style-h1 ${css}`}>{title1}</h1>;
}

export default H1Component;
