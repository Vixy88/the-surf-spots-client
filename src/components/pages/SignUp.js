import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../common/ui/form/Form";

function RegisterUser() {
  // const [formData, setFormData] = useState({});
  // const [userCreated, setUserCreated] = useState(null);

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const renderRegForm = (
    <Form onSubmit={onSubmit}>
      <div className="mb-3">
        <Input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <Input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <Input
          type="email"
          placeholder="Email"
          name="eMail"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="bg-teal-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded btn-warning"
      >
        Register
      </button>
    </Form>
  );

  return (
    <div>
      <div className="m-10">
        <img
          className="mx-auto h-12 w-auto"
          src="/logo_teal.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register for FREE
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/login"
            className="font-medium text-teal-500 hover:text-teal-500"
          >
            Log in Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;
