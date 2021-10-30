import { useState } from "react";
import SignIn from "components/signIn/SignIn";
import { AuthContext } from "lib/contexts";
import ExplorePage from "components/explore/ExplorePage";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {isSignedIn ? <ExplorePage /> : <SignIn />}
    </AuthContext.Provider>
  );
}
