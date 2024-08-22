import "./Select.css";

function Select({ datas, question, id, css, name }) {
  return (
    <label htmlFor={id} className={`select-form ${css}`}>
      {question}
      <select name={name} id={id}>
        <option value="">-Veuillez choisir une option-</option>
        {datas.map((data) => (
          <option value={data.name} key={data.id}>
            {data.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
