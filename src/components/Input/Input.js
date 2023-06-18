import './Input.css';

function Input({ type, name, labelText, mod }) {
  return(
    <div className={`input-container input-container_type-${mod}`}>
      <label
        htmlFor={name}
        className={`input__label input__label_type-${mod}`}
      >{labelText}</label>
      <input
        className={`input input_type-${mod}`}
        type={type}
        name={name}
        id={name}
        required
      />
    </div>
  )
}

export default Input;