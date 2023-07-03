import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import archery from "./products/images-of-products/archery.jpg";
import archery2 from "./products/images-of-products/archery-2.jpg";
import archery4 from "./products/images-of-products/archery4.jpg";
import boxing from "./products/images-of-products/boxing.jpg";
import archery3 from "./products/images-of-products/archery-3.jpg";
import cricketballfeeder from "./products/images-of-products/cricket-ballfeeder.jpg";
import cricketbat from "./products/images-of-products/cricketbat.jpg";
import cricketset from "./products/images-of-products/cricketset.jpg";
import football from "./products/images-of-products/football.jpg";
import golfset from "./products/images-of-products/golfset.jpg";
import kayak from "./products/images-of-products/kayak.jpg";
import shoe1 from "./products/images-of-products/shoe-1.jpg";
import shoe2 from "./products/images-of-products/shoe-2.jpg";
import shoe3 from "./products/images-of-products/shoe-3.jpg";
import underterrain from "./products/images-of-products/underterrain.jpg";
import tabletennis from "./products/images-of-products/tabletennis.jpg";
import kohli from "./home-images/kohli.jpg";
import messi from "./home-images/messi.jpg";
import tennis from "./home-images/tennis.jpg";
import archeryHome from "./home-images/archery.jpeg";
import Header from "./Header";
import Footer from "./Footer";
import Underterrain from "./products/Underterrain";

function Home() {
  return (
    <>
      <Header />
      <MyCarousel />
      <Products />
      <Footer />
    </>
  );
}

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={kohli} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={messi} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 height-10"
          src={archeryHome}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tennis} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <style>
        {`
            .allproducts {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border: 1px solid transparent;
            }
  
            .allproducts:hover {
              transform: scale(1.05);
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
              border-color: whitesmoke;
            }
  
          `}
      </style>

      <div className="row">
        <h1 className="mt-4 mb-5" style={{ fontSize: "40px" }}>
          Our Products
        </h1>
      </div>

      <div className="row ms-4 me-2">
        <div className="row justify-content-evenly mt-5">
          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/kayak"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={kayak}
                alt="kayak"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Intex Explorer K2 Kayak
                </p>
                <h5 className="card-text fontstyle mb-3">₹21,999</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/golfset"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={golfset}
                alt="golfset"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">W.P. Golf Set</p>
                <h5 className="card-text fontstyle mb-3">₹39,999</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/football"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={football}
                alt="football"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Adidas League Football
                </p>
                <h5 className="card-text fontstyle mb-3">₹3,555</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/archery2"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={archery2}
                alt="archery2"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Neutral Hunter Longbow
                </p>
                <h5 className="card-text fontstyle mb-3">₹12,739</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/boxing"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={boxing}
                alt="boxing"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Leather Punching Bag
                </p>
                <h5 className="card-text fontstyle mb-3">₹3,950</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/archery4"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={archery4}
                alt="Archery4"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Archery Chest Guard
                </p>
                <h5 className="card-text fontstyle mb-3">₹1,979</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/tabletennis"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={tabletennis}
                alt="tabletennis"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Table Tennis Sportneer-2
                </p>
                <h5 className="card-text fontstyle mb-3">₹1,500</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                  View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/shoe2"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={shoe2}
                alt="shoe2"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Nike Lebron Witness VII
                </p>
                <h5 className="card-text fontstyle mb-3">₹6,000</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/underterrain"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={underterrain}
                alt="Underterrain"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Urban Terrain Mountain Bike 500
                </p>
                <h5 className="card-text fontstyle mb-3">₹3,999</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/archery"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={archery}
                alt="archery"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Handmade Wooden Bow Arrow Set
                </p>
                <h5 className="card-text fontstyle mb-3">₹4,647</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/shoe1"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={shoe1}
                alt="shoe1"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Adidas Howzat Spike Cricket Shoe
                </p>
                <h5 className="card-text fontstyle mb-3">₹3,800</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/cricketballfeeder"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={cricketballfeeder}
                alt="cricketballfeeder"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Automatic Academy Cricket Ball Feeder
                </p>
                <h5 className="card-text fontstyle mb-3">₹11,995</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/cricketset"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={cricketset}
                alt="cricketset"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  SG Economy Cricket Kit
                </p>
                <h5 className="card-text fontstyle mb-3">₹6,000</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/cricketbat"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={cricketbat}
                alt="cricketbat"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  English Willow Bat
                </p>
                <h5 className="card-text fontstyle mb-3">₹2,100</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/archery3"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={archery3}
                alt="archery3"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Aimdor Archery Target EVA
                </p>
                <h5 className="card-text fontstyle mb-3">₹5,999</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>

          <div className="col-8 col-md-6 col-lg-4 col-xl-3 mb-5">
            <Link
              to="/shoe3"
              className="card allproducts"
              style={{ width: "18rem", textDecoration: "none" }}
            >
              <img
                src={shoe3}
                alt="shoe3"
                className="card-img-top img-fluid d-block mx-auto"
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text fontstyle fs-5 mb-2">
                  Nike Renew Run 4
                </p>
                <h5 className="card-text fontstyle mb-3">₹4,647</h5>
                <Link to="/Login" className="btn btn-warning d-block mx-auto">
                 View Details
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
