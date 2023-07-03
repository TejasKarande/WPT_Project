import { useRef, useState } from "react";
import Footer from "./Footer";
import "./RegisterBackground.css";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phoneno: "",
    password: "",
    confirmpassword: "",
  });

  let handlechangenameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };
  let handlechangeusernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };
  let handlechangeemailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handlechangephonenoAction = (e) => {
    let newuser = { ...user, phoneno: e.target.value };
    setUser(newuser);
  };
  let handlechangepasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };
  let handlechangegenderAction = (e) => {
    let newuser = { ...user, gender: e.target.value };
    setUser(newuser);
  };

  let addUserAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://127.0.0.1:4000/adduser?name=${user.name}&username=${user.username}&email=${user.email}&phoneno=${user.phoneno}&gender=${user.gender}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        name: "",
        username: "",
        email: "",
        phoneno: "",
        password: "",
        confirmpassword: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("successfully Registered");
      setIsSuccess(true);
    } catch (err) {
      alert("User is Already Registered");
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-img bg-Register justify-content-center">
        <div className="container ">
          <div className="row">
            <div className="col-sm-1 col-md-3"></div>
            <div className="col-sm-11 col-md-6 border-dark border-1 bg-info-subtle p-4 mt-4">
              <div className="justify-content-center text-center">
                <h1>Register</h1>
              </div>
              <form ref={formRef} className="needs-validation">
                <div className="p-1">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="form-control mb-2"
                    value={user.name}
                    onChange={handlechangenameAction}
                    required
                  />
                </div>
                <div className="p-1">
                  Username
                  <br />
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    className="form-control mb-2"
                    value={user.username}
                    onChange={handlechangeusernameAction}
                    required
                  />
                </div>

                <div className="p-1">
                  Email
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control mb-2"
                    value={user.email}
                    onChange={handlechangeemailAction}
                    required
                  />
                </div>
                <div className="p-1">
                  Phone Number <br />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    className="form-control mb-2"
                    pattern="[0-9]{10}"
                    value={user.phoneno}
                    onChange={handlechangephonenoAction}
                    required
                  />
                </div>
                <div className="p-1">
                  Gender
                  <br />
                  <input
                    type="radio"
                    name="gender"
                    className="mb-2 p-2"
                    value="male"
                    onChange={handlechangegenderAction}
                    required
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    className="mb-3 ms-4"
                    value="female"
                    onChange={handlechangegenderAction}
                    required
                  />
                  Female
                </div>

                <div className="p-1">
                  Password
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password with minimum 6 characters"
                    className="form-control mb-2"
                    minlength="6"
                    value={user.password}
                    onChange={handlechangepasswordAction}
                    required
                  />
                </div>

                <div>
                  <input type="checkbox" required /> I Accept Terms & Conditions
                </div>
                <div className="p-1">
                  <input
                    type="submit"
                    value="Submit"
                    className="form-control bg-success text-white mt-4 fs-5 p-2"
                    onClick={addUserAction}
                  />
                </div>
                <div className="text-center mt-4">
                  Already a user? <Link to="/Login">Login</Link>
                </div>
              </form>
            </div>
          </div>
          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && (
            <div className="alert alert-danger">User Already Registered</div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
