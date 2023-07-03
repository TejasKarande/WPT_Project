import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/Login", { replace: true });
  };

  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Nav.Link
            as={Link}
            to="/userhome"
            style={{ fontSize: "20px", color: "white" }}
          >
            Sports Emporium
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/UserHome"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/AboutUs"}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to={"/ContactUs"}>
                Contact Us
              </Nav.Link>

              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserHeader;
