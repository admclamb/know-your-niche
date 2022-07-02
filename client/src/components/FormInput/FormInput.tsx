import { Dispatch, SetStateAction } from 'react';

interface Props {
  name: string;
  size?: string;
  label: string;
  type?: string;
  value: string;
  handleChange: any;
  margin?: string;
}

const FormInput = (props: Props) => {
  const { name, value, handleChange, size, margin, label, type } = props;
  console.log(value);
  return (
    <div className={margin}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        aria-describedby={name + 'Help'}
        className={`form-control ${size}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

FormInput.defaultProps = {
  size: 'col-12',
  type: 'text',
  margin: 'mb-3',
};

export default FormInput;
