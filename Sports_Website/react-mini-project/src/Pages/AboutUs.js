import React from "react";
import cletus from "./home-images/cletus.jpg";
import tejas from "./home-images/tejas.jpg";
import priyanka from "./home-images/priyanka.jpg";
import UserHeader from "./UserHeader";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <UserHeader />
      <div className="container">
        <div>
          <div className="ms-4 mt-3">
            <h1>About Us</h1>
            <p className="fs-5 mt-4">
              Welcome to{" "}
              <span className="fw-bold text-danger">Sports Emporium</span>, your
              premier online destination for all things sports. We are dedicated
              to providing sports enthusiasts with a seamless and convenient
              shopping experience, offering a wide range of high-quality sports
              equipment, apparel, and accessories.
            </p>
            <p className="fs-5 mt-4">
              At <span className="fw-bold text-danger">Sports Emporium</span>,
              our mission is to inspire and enable athletes of all levels to
              reach their full potential. We believe that every athlete deserves
              access to top-notch sports gear and apparel that can enhance their
              performance and enjoyment of their chosen sport. We are committed
              to delivering exceptional products and outstanding customer
              service to support athletes in their pursuit of greatness.
            </p>
            <h2 className="mt-5 mb-4">Meet our team</h2>
            <div className="row d-flex">
              <div className="col-sm-12 col-md-4">
                <div className="team-member text-center mt-3">
                  <img
                    src={cletus}
                    alt="Cletus"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <h4>Cletus Dsouza</h4>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-3">
                <div className="team-member text-center">
                  <img
                    src={tejas}
                    alt="Tejas"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <h4 className="ms-3">Tejas Karande</h4>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-3">
                <div className="team-member text-center">
                  <img
                    src={priyanka}
                    alt="Priyanka"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <h4>Priyanka Mujumdar</h4>
                </div>
              </div>
              <div className="row">
                <p className="fs-5 mt-5">
                  We are a team of 3 studying at CDAC Mumbai. It has been a
                  rollercoaster of a ride learning so many things these past
                  months. Now we're on our journey in web development. Having
                  learnt HTML, CSS, Bootstrap, JavaScript and React, we built
                  our first website!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
