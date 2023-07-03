import React from "react";
import { useState } from "react";
import golfset from "./images-of-products/golfset.jpg";
import { useNavigate } from "react-router-dom";
import UserHeader from "../UserHeader";
import Footer from "../Footer";
import emailjs from "emailjs-com";

function Golfset() {
  const navigate = useNavigate();
  let [value, setValue] = useState(1);
  let plusFunction = () => {
    setValue(value + 1);
  };
  let minusFunction = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  let BuyNow = async () => {
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    try {
      // Send the email using emailjs
      const result = await emailjs.send(
        "service_yq2h1ur",
        "template_tetmz5v",
        {
          to_email: loggedInUserEmail,
        },
        "j-ng0JjdfpbVKQiMd"
      );

      console.log(result); // Log the result to the console for debugging

      // Redirect to the checkout page
      navigate("/CheckOut", { replace: true });
    } catch (error) {
      console.error("Error occurred during purchase:", error);
      // Handle the error or display an error message to the user
    }
  };

  return (
    <>
      <UserHeader />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10 col-lg-6 p-5">
            <div>
              <img
                src={golfset}
                alt="golf"
                style={{ width: "450px", height: "500px" }}
              />{" "}
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="mt-5">
              <h2>Wilson Profile's Golf Set XD 150 </h2>
            </div>
            <p className="mb-5">Brand: Wilson Profile</p>
            <h3 className="mb-3">₹ 21,999</h3>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <div className="input-group w-25">
                <button className="btn btn-secondary" onClick={minusFunction}>
                  -
                </button>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  value={value}
                  readOnly
                />
                <button className="btn btn-secondary" onClick={plusFunction}>
                  +
                </button>
              </div>
            </div>
            <input
              type="button"
              value="Buy NOW"
              className="w-20 p-2 text-md btn btn-md btn-primary"
              onClick={BuyNow}
            />
            <p className="mt-5">About the product:</p>
            <ul>
              <li>
                IRONS-Powerful stainless steel irons featuring extreme perimeter
                weighting create an enormous sweet spot for more forgiveness.
              </li>
              <li className="mt-1">
                PITCHING WEDGE-Enhanced spin technology in this versatile wedge
                improves playability and performance on the green.
              </li>

              <li className="mt-1">
                PUTTER-The heel/toe weighting in this easy-to-align putter
                creates head stability for a smooth, accurate putting stroke.
              </li>
              <li className="mt-1">
                CARRY BAG-Both durable and comfortable for walking golfers, this
                carry bag features a seven-way padded top to organize and
                protect the set.
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="mb-4">Our Guarantees</h4>
          <div className="col">
            <i className="fa fa-truck fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;5-day delivery</h6>
          </div>
          <div className="col">
            <i className="fa fa-box mr-2 fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;Easy returns</h6>
          </div>
          <div className="col">
            <i className="fa fa-money-bill-wave fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;Pay on Delivery</h6>
          </div>
          <div className="col">
            <i className="fa fa-check fa-lg"></i>
            <h6 className="d-inline-block"> &nbsp;2 years warranty</h6>
          </div>
        </div>

        <div className="row mt-5">
          <h4 className="mb-2">Customer Reviews</h4>
          <div>
            <h5>
              4.5 stars
              <span>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star-half-alt fa-sm"></i>
              </span>
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label className="form-label">Write a Review:</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="reviews mt-4 mb-5">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">@cletus</h6>
                  <p className="card-text">
                    {" "}
                    Comfortable golf clubs. A bit expensive, but worth it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Golfset;
