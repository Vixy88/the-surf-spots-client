// import "../common/auth/index.css";
import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Auth from "../common/auth/Auth";
import Account from "../common/auth/Account";

function SignUpNew() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}

export default SignUpNew;
