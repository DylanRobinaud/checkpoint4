import "./text.css";

function H3Component({ title3, css }) {
  return <h3 className={`style-h3 ${css}`}>{title3}</h3>;
}

export default H3Component;
