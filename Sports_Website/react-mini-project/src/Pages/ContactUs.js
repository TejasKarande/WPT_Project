import { useState } from "react";
import Footer from "./Footer";
import UserHeader from "./UserHeader";

function ContactUs() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  let handlechangenameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };
  let handlechangeemailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };
  let handlechangemessageAction = (e) => {
    let newuser = { ...user, message: e.target.value };
    setUser(newuser);
  };

  let submitAction = async () => {
    let url = `http://127.0.0.1:4000/addcontactus?name=${user.name}&email=${user.email}&message=${user.message}`;
    await fetch(url);

    let newuser = {
      name: "",
      email: "",
      message: "",
    };
  };

  return (
    <>
      <div>
        <UserHeader />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1 col-md-3 mt-5"></div>

          <div className="col-11 col-md-6 mt-4">
            <h1 className="mb-4 mt-4">Contact Us</h1>
            <form>
              <div className="form-group mb-4">
                <label for="name" className="fs-5">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={handlechangenameAction}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label for="email" className="fs-5">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handlechangeemailAction}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label for="message" className="fs-5">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  placeholder="Enter your message"
                  value={user.message}
                  onChange={handlechangemessageAction}
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="form-control bg-success text-white mt-4 fs-6 p-2"
                onClick={submitAction}
              />
            </form>
            <div className="mt-5">
              <p className="fs-5 mb-3">Meet us in person:</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482130.59390305186!2d72.52046899735807!3d19.254285804472005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1686135582874!5m2!1sen!2sin"
                width="450"
                height="400"
                className="border: 0"
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
