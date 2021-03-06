import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import { User } from "../../ts/interfaces/User";
import { createUser } from "../../api/apiUsers";
import { RegisterUser } from "../../ts/interfaces/RegisterUser";
const Register = () => {
  const defaultRegister = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const [register, setRegister] = useState<RegisterUser>(defaultRegister);
  const [error, setError] = useState<any>({});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const onSubmit = async (event: FormEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();
      const abortController = new AbortController();
      if (register.password !== register.passwordConfirm) {
        throw { message: "Passwords does not match" };
      }
      const userToCreate: RegisterUser = {
        first_name: register.first_name,
        last_name: register.last_name,
        username: register.username,
        email: register.email,
        password: register.password,
      };
      const response = await createUser(userToCreate, abortController.signal);
      console.log(response);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <section className="row">
      <h2 className="text-center">Welcome</h2>
      <section className="col-12 col-sm-11 col-md-5 ms-auto me-auto border rounded">
        <Form onSubmit={onSubmit}>
          <div className="row">
            <FormInput
              name="first_name"
              label="First Name"
              value={register.first_name}
              handleChange={handleChange}
              size="col-12 col-lg-6"
            />
            <FormInput
              name="last_name"
              label="Last Name"
              value={register.last_name}
              handleChange={handleChange}
              size="col-12 col-lg-6"
            />
          </div>

          <FormInput
            name="username"
            label="Username"
            value={register.username}
            handleChange={handleChange}
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={register.email}
            handleChange={handleChange}
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={register.password}
            handleChange={handleChange}
          />
          <FormInput
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
            value={register.passwordConfirm}
            handleChange={handleChange}
          />
          <div className="mb-3">
            <p>
              Already have an account?
              <Link to="/login" className="ms-1">
                Log In Here
              </Link>
            </p>
          </div>
        </Form>
      </section>
    </section>
  );
};

export default Register;
