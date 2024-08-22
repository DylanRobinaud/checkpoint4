import "./Input.css";

function Input({ label, type, id, name, value, placeholder, onChange }) {
  return (
    <label className="block-input">
      {label}
      <input
        className="input-field"
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
