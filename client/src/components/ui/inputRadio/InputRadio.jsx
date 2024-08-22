import "./InputRadio.css";

function InputRadio({ datas, type, name, onChange }) {
  return (
    <div className={type}>
      {datas.map((data) => (
        <div key={data.id}>
          <label htmlFor={data.name}>
            <input
              type={type}
              id={data.id}
              name={name}
              value={data.name}
              onChange={onChange}
            />
            {data.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default InputRadio;
