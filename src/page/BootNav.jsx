import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";

function BootNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <Link className="link" to="/">
          {" "}
          <FaMobileScreen className="icons" />
          MOBILE SHOP
        </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link" to="/">
                {" "}
                <FaHome className="icons" />
                HOME
              </Link>
            </Nav.Link>

            <Nav.Link></Nav.Link>

            <Link className="link" to="/product">
              {" "}
              <AiOutlineProduct className="icons" /> PRODUCT
            </Link>
            <Nav.Link>
              <Link className="link" to="/cart">
                {" "}
                <FaCartPlus className="icons" /> CART
              </Link>
            </Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootNav;
