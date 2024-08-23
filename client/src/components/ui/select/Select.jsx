import "./Select.css";

function Select({ datas, question, id, value, onChange, css }) {
  return (
    <label htmlFor={id} className={`select-form ${css}`}>
      {question}
      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="0">-Veuillez choisir une option-</option>
        {datas.map((data) => (
          <option value={data.id} key={data.id} className="select-option">
            {data.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
