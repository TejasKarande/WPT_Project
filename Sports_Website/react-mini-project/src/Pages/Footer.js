import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer bg-dark text-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-1 mt-3">
              <h5>About Us</h5>
              <p>
                Here at Sports Emporium, we are dedicated to providing sports
                enthusiasts with a seamless and convenient shopping experience,
                offering a wide range of high-quality sports equipment, apparel,
                and accessories.
              </p>
            </div>
            <div className="col-md-3 offset-md-1 mt-3">
              <h5>Important Link</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/Home" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Login" className="text-decoration-none">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/Register" className="text-decoration-none">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-3 teammember">
              <h5>Follow Us</h5>
              <ul className="list-inline social-icons">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com" target="_blank">
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.twitter.com" target="_blank">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com" target="_blank">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2023 Sports Emporium. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
