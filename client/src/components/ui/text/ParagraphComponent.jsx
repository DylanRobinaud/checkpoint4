import "./text.css";

function ParagraphComponent({ text, css }) {
  return <p className={`style-paragraph ${css}`}>{text}</p>;
}

export default ParagraphComponent;
