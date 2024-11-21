function InputForm({ label, type, id, value,defaultValue, onChange, className, readOnly }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
        readOnly={readOnly}
      />
    </div>
  );
}

export default InputForm;