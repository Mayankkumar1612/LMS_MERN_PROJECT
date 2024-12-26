import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import img1 from "../assets/e.png";
import img2 from "../assets/learn-anytime.png";
import img3 from "../assets/instructor.png";
import img4 from "../assets/earn-certifications.png";
import img5 from "../assets/web_development.png";
import img6 from "../assets/data_science.png";
import img7 from "../assets/cyber-security.png";
import img8 from "../assets/IOT.png";
import img9 from "../assets/python.png";
import img10 from "../assets/Digital marketing.png";
import img11 from "../assets/data analytics.png";
import img12 from "../assets/Machine learning.png";
import img13 from "../assets/cloud.png";
import img14 from "../assets/Mobile app development.png";
import img15 from "../assets/certificate1.png";

const LandingPage = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nqu2608", "template_k841trf", form.current, {
        publicKey: "ABzJi3Pk4yF-TkaT-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
         
          setSuccessMessage(true);

          
          form.current.reset();

        
          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    form.current.reset();
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-success text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-md-6 text-left">
              <h1 className="display-4">Welcome to NIELIT Haridwar</h1>
              <p className="lead">
                Your gateway to quality learning and career growth
              </p>
              <Link
                to="/signinform"
                className="btn btn-light btn-lg mt-3 fw-bold"
              >
                Get Started
              </Link>
            </div>

            {/* Right Side Image */}
            <div className="col-md-6 text-center">
              <img
                src={img1}
                className="img-fluid"
                alt="Logo"
                style={{
                  height: "300px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-4 bg-primary-subtle">
        <div className="container text-center">
          <h2 className="mb-2 fw-bold">Our Features</h2>
        </div>
      </section>

      <section className=" bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src={img2}
                className="img-fluid"
                alt="Logo"
                style={{
                  height: "200px",
                  borderRadius: "10px",
                }}
              />
              <i className="bi bi-book display-4 text-primary"></i>
              <h3 className="mt-3">Learn Anytime</h3>
              <p>
                Access courses anytime, anywhere with a user-friendly interface.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={img3}
                className="img-fluid"
                alt="Logo"
                style={{
                  height: "200px",
                  borderRadius: "10px",
                }}
              />
              <i className="bi bi-person-check display-4 text-primary"></i>
              <h3 className="mt-3">Certified Instructors</h3>
              <p>Learn from the best instructors with industry expertise.</p>
            </div>
            <div className="col-md-4">
              <img
                src={img4}
                className="img-fluid"
                alt="Logo"
                style={{
                  height: "200px",
                  borderRadius: "10px",
                }}
              />
              <i className="bi bi-award display-4 text-primary"></i>
              <h3 className="mt-3">Earn Certificates</h3>
              <p>
                Get recognized for your learning with accredited certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-4 bg-info-subtle ">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Popular Courses</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={img5} className="card-img-top" alt="Course 1" />
                <div className="card-body text-center">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Learn to build responsive websites and web applications.
                  </p>
                  <Link
                    to="/courses/web-development"
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={img6} className="card-img-top" alt="Course 2" />
                <div className="card-body text-center">
                  <h5 className="card-title">Data Science</h5>
                  <p className="card-text ">
                    Master data analysis, visualization, and machine learning.
                  </p>
                  <Link to="/courses/data-science" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={img7} className="card-img-top" alt="Course 3" />
                <div className="card-body text-center">
                  <h5 className="card-title">Cyber Security</h5>
                  <p className="card-text">
                    Protect systems and networks from cyber threats.
                  </p>
                  <Link to="/courses/cybersecurity" className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={img8} className="card-img-top" alt="Course 3" />
                <div className="card-body text-center">
                  <h5 className="card-title">Internet Of Things</h5>
                  <p className="card-text">
                    Control the devices and Systems over the Network
                  </p>
                  <Link
                    to="/courses/Internetofthings"
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}

      <div className="d-flex justify-content-center align-items-center pt-5 bg-light">
        <div className="d-flex gap-4 bg-white p-4 rounded shadow">
          <div className="text-center">
            <div className="fs-1 mb-2 text-muted">🎓</div>
            <div className="fs-3 fw-bold mb-2 text-dark">20+</div>
            <div className="fs-5 text-muted">Qualified Instructors</div>
          </div>
          <div className="text-center">
            <div className="fs-1 mb-2 text-muted">👥</div>
            <div className="fs-3 fw-bold mb-2 text-dark">60,000+</div>
            <div className="fs-5 text-muted">Course Enrollments</div>
          </div>
          <div className="text-center">
            <div className="fs-1 mb-2 text-muted">📺</div>
            <div className="fs-3 fw-bold mb-2 text-dark">41,000+</div>
            <div className="fs-5 text-muted">Courses in 42 Languages</div>
          </div>
          <div className="text-center">
            <div className="fs-1 mb-2 text-muted">🎥</div>
            <div className="fs-3 fw-bold mb-2 text-dark">79,000+</div>
            <div className="fs-5 text-muted">Online Videos</div>
          </div>
        </div>
      </div>

      {/* Our Courses */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-bold">Our Courses</h2>
        <div
          id="coursesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#coursesCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#coursesCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#coursesCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* <!-- Carousel Items --> */}
          <div className="carousel-inner">
            {/* <!-- Slide 1 --> */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img9} className="card-img-top" alt="Course 1" />
                    <div className="card-body">
                      <h5 className="card-title">Python Programming</h5>
                      <p className="card-text">
                        Learn the basics of programming with this
                        beginner-friendly course.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img10} className="card-img-top" alt="Course 2" />
                    <div className="card-body">
                      <h5 className="card-title">Digital Marketing</h5>
                      <p className="card-text">
                        Advance your skills with this intermediate-level course.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img8} className="card-img-top" alt="Course 3" />
                    <div className="card-body">
                      <h5 className="card-title">Internet Of Things</h5>
                      <p className="card-text">
                        Master programming with this comprehensive advanced
                        course.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img11} className="card-img-top" alt="Course 4" />
                    <div className="card-body">
                      <h5 className="card-title">Data Analytics</h5>
                      <p className="card-text">
                        Learn about Data Analytics and its various applications.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img12} className="card-img-top" alt="Course 5" />
                    <div className="card-body">
                      <h5 className="card-title">Machine Learning</h5>
                      <p className="card-text">
                        Understand Machine learning, Deep learning and AI
                        fundamentals.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img5} className="card-img-top" alt="Course 6" />
                    <div className="card-body">
                      <h5 className="card-title">Web Development</h5>
                      <p className="card-text">
                        Explore web development and build amazing websites.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Slide 3 --> */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img13} className="card-img-top" alt="Course 7" />
                    <div className="card-body">
                      <h5 className="card-title">Cloud Computing</h5>
                      <p className="card-text">
                        Get started with cloud computing technologies.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img7} className="card-img-top" alt="Course 8" />
                    <div className="card-body">
                      <h5 className="card-title">Cyber Security</h5>
                      <p className="card-text">
                        Learn about cybersecurity and how to protect data.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <img src={img14} className="card-img-top" alt="Course 9" />
                    <div className="card-body">
                      <h5 className="card-title">Mobile App Development</h5>
                      <p className="card-text">
                        Explore the world of mobile app development.
                      </p>
                      <Link to="/signinform" className="btn btn-primary">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Controls --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#coursesCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#coursesCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section className="bg-light">
        <div className="container text-center">
          <Link to="/courses" className="btn btn-success mt-4">
            More Courses
          </Link>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold">Earn Recognized Certificates</h2>
          <p className="lead">
            Boost your career prospects with certificates from accredited
            programs.
          </p>
          <img
            src={img15}
            className="img-fluid rounded mx-auto d-block border border-5"
          ></img>
          <Link to="/certificates" className="btn btn-secondary mt-4">
            Explore Certificates
          </Link>
        </div>
      </section>

      {/* Map Location Section */}
      <section className="">
        <div className="">
          <h2 className="text-center mb-4 fw-bold">Our Location</h2>
          <p className="text-center">
            Visit us at our headquarters for more information or support.
          </p>
          <div className="text-center">
            <iframe
              title="NIELIT Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.3393586166612!2d78.08073037500685!3d29.95276332290979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390948436ac70477%3A0xba79a6928ce13d42!2sNIELIT%20Haridwar!5e1!3m2!1sen!2sin!4v1734711620533!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-5 bg-secondary-subtle">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Get in Touch</h5>
              <p>Email: support@nielitlms.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    name="from_name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="your email"
                    name="from_email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Your Message"
                    name="message"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-primary btn-lg"
                />
              </form>
              {/* Success Message */}
              {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  Your message has been successfully sent!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-dark text-white text-center">
        <p>&copy; 2024 NIELIT LMS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
