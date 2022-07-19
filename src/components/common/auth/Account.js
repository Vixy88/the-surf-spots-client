import { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import Avatar from "./Avatar";

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      {loading ? (
        "Saving ..."
      ) : (
        <form
          onSubmit={updateProfile}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center"
        >
          <Avatar
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ username, website, avatar_url: url });
            }}
          />
          <div className="mb-3">
            <p className="mt-6 text-center font-extrabold text-gray-900">
              Email: {session.user.email}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              value={username || ""}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="url"
              value={website || ""}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button
              className="bg-teal-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded btn-warning"
              disabled={loading}
            >
              Update profile
            </button>
          </div>
        </form>
      )}
      <button
        type="button"
        className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded btn-warning"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Account;
