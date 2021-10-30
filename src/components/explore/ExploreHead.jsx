import "components/explore/ExploreHead.css";
import { AuthContext } from "lib/contexts";
import { useContext } from "react";

export default function ExploreHead({ activePage, setActivePage }) {
  const { setIsSignedIn } = useContext(AuthContext);

  const signOut = () => {
    localStorage.removeItem("auth");
    setIsSignedIn(false);
  };

  return (
    <div className="heading">
      <nav className="navbar">
        <div className="navbar__items">
          <span className="navbar__item logo">JobHunt</span>
          <span
            className={`navbar__item ${
              activePage === "findJob" ? "navbar__item--active" : ""
            }`}
            onClick={() => setActivePage("findJob")}
          >
            Find Jobs
          </span>
          <span
            onClick={() => setActivePage("createJob")}
            className={`navbar__item ${
              activePage === "createJob" ? "navbar__item--active" : ""
            }`}
          >
            Post a Job
          </span>
        </div>
        <span className="navbar__item sign-out" onClick={signOut}>
          Sign out
        </span>
      </nav>
      <h1 className="title">Find Your Dream Job</h1>
      <h3 className="subtitle">
        Browse through thousands of full-time or part-time jobs near you
      </h3>
    </div>
  );
}
