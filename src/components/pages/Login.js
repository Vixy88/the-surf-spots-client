import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginUser() {
  const [formData, setFormData] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/users/", formData);
      console.log(res);
      if (res.status === 200) {
        setUserLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
      setUserLoggedIn(false);
    }
  };

  const renderLoginForm = (
    <form
      onSubmit={onLogin}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <div className="mb-3">
        <label
          for="email"
          className="block text-grey-darker text-sm font-bold mb-2"
        >
          Email address
        </label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="eMail"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label
          for="password"
          className="block text-grey-darker text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          onChange={onChange}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded btn-warning"
        >
          Login
        </button>
      </div>
    </form>
  );

  return (
    <div className="m-10">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="/logo_teal.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            to="/signup"
            className="font-medium text-teal-500 hover:text-teal-500"
          >
            Register Here
          </Link>
        </p>
      </div>
      {userLoggedIn === false && <div className="failure">Login Failed!</div>}
      {userLoggedIn ? (
        <div>
          <div>Your are Logged in 👏🏼</div> <button>Log Out</button>
        </div>
      ) : (
        renderLoginForm
      )}
    </div>
  );
}

export default LoginUser;
