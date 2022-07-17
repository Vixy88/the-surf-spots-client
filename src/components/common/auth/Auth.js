import { useState } from "react";
import { supabase } from "../../../supabaseClient";
import { Link } from "react-router-dom";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="m-10" aria-live="polite">
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
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          >
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-grey-darker text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              className="bg-teal-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded btn-warning"
              aria-live="polite"
            >
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
