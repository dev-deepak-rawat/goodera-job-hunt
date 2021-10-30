import { useState } from "react";
import SignIn from "components/signIn/SignIn";
import { AuthContext } from "lib/contexts";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <SignIn />
    </AuthContext.Provider>
  );
}
