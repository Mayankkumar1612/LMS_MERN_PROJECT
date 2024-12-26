import img1 from "../assets/Screenshot 2024-09-25 155952.png";
import img2 from "../assets/5.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid bg-light shadow-sm">
      {/* Top Section with Logo and Title */}
      <section className="d-flex align-items-center justify-content-between py-2">
        <div className="d-flex align-items-center">
          <img
            src={img1}
            className="img-fluid"
            alt="Logo"
            style={{ height: "60px" }}
          />
          <div className="ms-3">
            <p className="mb-0 fw-bold text-primary">
              राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान, हरिद्वार
            </p>
            <p className="mb-0 small">
              National Institute of Electronics & Information Technology,
              Haridwar
            </p>
          </div>
        </div>
        <div className="text-end ms-auto">
          <p className="mb-0 fw-bold">
            Ministry of Electronics & Information Technology
          </p>
          <p className="mb-0 small">Government of India</p>
        </div>
        <div className="float-end">
          <img
            src={img2}
            className="img-fluid"
            alt="Gov Logo"
            style={{ height: "60px" }}
          />
        </div>
      </section>

      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            NIELIT Haridwar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/examportal">
                  Exam Portal
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/examportal"
                  data-bs-toggle="dropdown"
                ></NavLink>
                
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/examportal/centreform">
                      EXAM CENTRE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/examportal/examsuperintendent">
                      EXAM SUPERINTENDENT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/examportal/esexamcentre">
                      ES EXAM CENTRE
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/signinform">
                  Login/Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
