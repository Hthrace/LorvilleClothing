import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOuthandler = async () => {
    await signOutUser;
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img src={CrwnLogo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOuthandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/sign-in"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
