import "./TextArea.css";

function TextArea({ label, id, name, value, placeholder, onChange, data }) {
  return (
    <label className="block-input">
      {label}
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
        {data}
      </textarea>
    </label>
  );
}

export default TextArea;
