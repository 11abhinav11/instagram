import logo from "../images/logo.png";
import { Outlet, Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="logoc">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="login container border border-black">
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Picture</label>
            <input type="file" className="form-control" />
          </div>
          <div className="btbox">
            <Link to="/" className="btn btn-primary">
              Login
            </Link>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
