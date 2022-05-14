import { useState } from "react";
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
        "http://localhost:8000/users/",
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="eMail"
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );

  return (
    <div className="App">
      {userCreated ? (
        <div>Your new user has been created! 🎯 </div>
      ) : (
        renderRegForm
      )}
      {userCreated === false && (
        <div className="failure">User couldn't be created.</div>
      )}
    </div>
  );
}

export default RegisterUser;
