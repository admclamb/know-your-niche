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
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
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
