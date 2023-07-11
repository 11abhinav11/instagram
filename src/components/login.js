import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "../config/firebase";
export default function Login() {
  let navigate = useNavigate();
  function submit() {
    console.log("submit");
    navigate("/home");
  }
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
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="btbox">
            <button type="submit" onClick={submit} className="btn btn-primary">
              Login
            </button>
            <Link to="/signup" className="btn btn-primary">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
