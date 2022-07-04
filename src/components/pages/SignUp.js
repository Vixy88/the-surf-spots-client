import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterUser() {
  const [formData, setFormData] = useState({});
  const [userCreated, setUserCreated] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/users/register/",
        {
          headers: {
            Authorization: process.env.API,
          },
        },
        formData
      );
      console.log(res);
      if (res.status === 201) {
        setUserCreated(true);
      }
    } catch (e) {
      console.log(e);
      setUserCreated(false);
    }
  };

  const renderRegForm = (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center"
    >
      <div className="mb-3">
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="eMail"
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded btn-warning"
      >
        Register
      </button>
    </form>
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
      {/* {userCreated ? (
        <div>Your new user has been created! 🎯 </div>
      ) : (
        renderRegForm
      )}
      {userCreated === false && (
        <div className="failure">User couldn't be created.</div>
      )} */}
    </div>
  );
}

export default RegisterUser;
