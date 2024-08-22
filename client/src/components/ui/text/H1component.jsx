import "./text.css";

function H1Component({ title, css }) {
  return <h1 className={`style-h1 ${css}`}>{title}</h1>;
}

export default H1Component;
