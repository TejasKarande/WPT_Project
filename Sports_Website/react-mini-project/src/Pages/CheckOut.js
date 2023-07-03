import Footer from "./Footer";
import UserHeader from "./UserHeader";
import { useNavigate } from "react-router-dom";
function CheckOut() {
  const navigate = useNavigate();
  let ContinueAction = () => {
    navigate("/UserHome");
  };
  return (
    <>
      <UserHeader />
      <div className="container">
        <div className="row mt-5"></div>
        <div className="row mt-5">
          <div className="col-1 col-md-2 mt-2"></div>
          <div className="col-11 col-md-7 justify-content-center">
            <div className="container">
              <div className="row mt-3">
                <h2>Your order has been successfully processed</h2>
                <br />
                <br />
                <p
                  className="mt-3 text-danger fs-lg"
                  style={{ fontStyle: "italic", fontWeight: "bold" }}
                >
                  Confirmation sent to your registered email
                </p>
              </div>
              <div className="row mt-4">
                <h4 className="mb-4">Our Guarantees</h4>
                <div className="col-6 col-md-3">
                  <i className="fa fa-truck fa-lg"> </i>
                  <h6 className="d-inline-block">&nbsp;5-day delivery</h6>
                </div>
                <div className="col-6 col-md-3">
                  <i className="fa fa-box mr-2 fa-lg"></i>
                  <h6 className="d-inline-block">&nbsp;Easy returns</h6>
                </div>
                <div className="col-6 col-md-3">
                  <i className="fa fa-money-bill-wave fa-lg"></i>
                  <h6 className="d-inline-block">&nbsp;Pay on Delivery</h6>
                </div>
                <div className="col-6 col-md-3">
                  <i className="fa fa-check fa-lg"></i>
                  <h6 className="d-inline-block">&nbsp;2 years warranty</h6>
                </div>
              </div>
              <div className="row mt-5 mb-5" ClassName="mb-250px">
                <input
                  type="button"
                  value="Continue Shopping"
                  className="w-20 btn btn-md btn-success"
                  onClick={ContinueAction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-5">
        <Footer />
      </div>
    </>
  );
}

export default CheckOut;
