import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
const Register = () => {
  const defaultRegister = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };
  const [register, setRegister] = useState(defaultRegister);
  const handleChange = (event: FormEvent<HTMLInputElement>) => {};
  const onSubmit = () => {};
  return (
    <section className="row">
      <h2 className="text-center">Welcome</h2>
      <section className="col-12 col-sm-11 col-md-5 ms-auto me-auto border rounded">
        <Form onSubmit={onSubmit}>
          <FormInput
            name="first_name"
            label="First Name"
            value={defaultRegister.first_name}
            handleChange={handleChange}
            size="col-6"
          />
          <FormInput
            name="last_name"
            label="Last Name"
            value={defaultRegister.last_name}
            handleChange={handleChange}
            size="col-6"
          />
          <FormInput
            name="username"
            label="Username"
            value={defaultRegister.username}
            handleChange={handleChange}
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={defaultRegister.email}
            handleChange={handleChange}
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={defaultRegister.password}
            handleChange={handleChange}
          />
          <FormInput
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
            value={defaultRegister.passwordConfirm}
            handleChange={handleChange}
          />
          <div className="mb-3">
            <p>
              Don't have an account?
              <Link to="/register" className="ms-1">
                Create Account Here
              </Link>
            </p>
          </div>
        </Form>
      </section>
    </section>
  );
};

export default Register;
