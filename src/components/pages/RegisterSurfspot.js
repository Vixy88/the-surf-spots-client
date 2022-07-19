import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function RegisterSurfspot() {
  const [surfspots, setSurfspots] = useState([]);
  const [newName, setNewName] = useState("");

  const addSurfspot = async (newName) => {
    let { data: name } = await supabase
      .from("surfspots")
      .insert({ name: newName })
      .single();
    setSurfspots([...surfspots, name]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add more surfspots"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <button onClick={() => addSurfspot(newName)}>Add</button>
      </div>
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

export default RegisterSurfspot;
