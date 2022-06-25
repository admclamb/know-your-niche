import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { ILogin } from '../../ts/interfaces/Login';

const Login = () => {
  const defaultLogin = {
    email: '',
    password: '',
  };
  const [login, setLogin] = useState<ILogin>(defaultLogin);
  const onSubmit = () => {};
  return (
    <section className="row">
      <h2 className="text-center mb-2">Welcome Back</h2>
      <section className="col-12 col-sm-11 col-md-5 ms-auto me-auto border rounded">
        <Form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
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
