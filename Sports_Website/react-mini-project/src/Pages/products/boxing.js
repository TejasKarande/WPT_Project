import React from "react";
import { useState } from "react";
import boxing from "./images-of-products/boxing.jpg";
import { useNavigate } from "react-router-dom";
import UserHeader from "../UserHeader";
import emailjs from "emailjs-com";
import Footer from "../Footer";

function Boxing() {
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

      console.log(result);

      // Redirect to the checkout page
      navigate("/CheckOut", { replace: true });
    } catch (error) {
      console.error("Error occurred during purchase:", error);
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
                src={boxing}
                alt="boxing"
                style={{ width: "450px", height: "650px" }}
              />{" "}
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="mt-5">
              <h2>Aurion Leather Punching Bag with Chain</h2>
            </div>
            <p className="mb-5">Brand: Aurion</p>
            <h3 className="mb-3">₹ 3,950</h3>
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
                {" "}
                Multi-Layer Construction: Each layer has been filled with
                shredded cloth. This Aurion boxing bag comes with reinforced
                stitching for durability and durable product life
              </li>
              <li className="mt-1">
                Components: Aurion punching bag with hanging chain and a 12 oz
                glove. Duly stitched, textile-filled heavy-duty punch bag weighs
                (approx 20 kg when filled, 4ft, Black) The bag is filled with
                even layers of shredded textiles material to minimizes the
                chance of bruising your wrists.
              </li>
              <li className="mt-1">
                Benefits: Boost you Your cardiovascular fitness, muscular
                endurance and muscular strength using the Aurion punching bag.
                Our bag supports boxing, MMA, kickboxing and many such to keep
                your fitness game high.
              </li>
              <li className="mt-1">
                <li>
                  How to choose your punching bag: For punches only, choose a
                  punching bag from 24 to 36in. - for punches and kicks, choose
                  a bag over 26in. For kids or beginners, go for a polyester bag
                  that's flexible. For regular boxers, choose a PVC or leather
                  bag that's stiff and very durable. For expert boxers or
                  intensive training, use a sturdy bag made from natural
                  leather.
                </li>
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
              3.5 stars
              <span>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
                <i className="fa fa-star fa-sm"></i>
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
                  <h6 className="card-title">@priyanka</h6>
                  <p className="card-text">
                    Solid product, hard and rigid but doesn't hurt the wrists.
                    Recommended
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

export default Boxing;
