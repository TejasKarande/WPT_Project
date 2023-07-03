import Footer from "./Footer";
import UserHeader from "./UserHeader";
import "./LoginBackground.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handleremailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlepasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://127.0.0.1:4000/login-by-get?email=${user.email}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let errorMessage = await res.text();
        throw new Error(errorMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/UserHome", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };
  return (
    <>
      <Header />
      <div className="bg-Login justify-content-center">
        <br />
        <br />
        <div className="row">
          <div className="has-bg-img bg-purple bg-blend-multiply">
            <div className="container">
              <div className="row mt-4">
                <div className="col-sm-12 col-md-3"></div>
                <div className="col-sm-12 col-md-6 border border-dark border-1 bg-info-subtle p-4">
                  <div className="justify-content-center text-center">
                    <h1 className="mt-4">Login</h1>
                  </div>
                  <br />
                  <form ref={formRef} className="needs-validation">
                    <div className="form-group">
                      <label for="username">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleremailAction}
                        required
                      />
                      <label for="password">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handlepasswordAction}
                        required
                        minlength="6"
                      />
                      <small className="text-muted">Minimum 6 characters</small>
                    </div>
                    <div className="d-flex justify-content-center">
                      <input
                        type="button"
                        value="Login"
                        className="w-20 btn btn-md btn-primary"
                        onClick={loginAction}
                      />
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    Not a user? <Link to="/Register">Register</Link>
                  </div>
                  {isSuccess && (
                    <div className="alert alert-success">Success</div>
                  )}
                  {isError && (
                    <div className="alert alert-danger">
                      Enter Valid email & Password
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Login;
