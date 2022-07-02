import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { ILogin } from '../../ts/interfaces/Login';

const Login = () => {
  const defaultLogin = {
    email: '',
    password: '',
  };
  const [login, setLogin] = useState<ILogin>(defaultLogin);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const onSubmit = () => {};
  return (
    <section className="row">
      <h2 className="text-center mb-2">Welcome Back</h2>
      <section className="col-12 col-sm-11 col-md-5 ms-auto me-auto border rounded">
        <Form onSubmit={onSubmit}>
          <FormInput
            name="email"
            label="Email address"
            type="email"
            value={login.email}
            handleChange={handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={login.password}
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

export default Login;
