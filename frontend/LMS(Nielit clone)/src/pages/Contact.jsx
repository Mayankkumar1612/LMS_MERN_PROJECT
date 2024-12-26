import "./Contact.css";
import img1 from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <div className="d-flex pb-5">
        <div className="pe-5">
          <img src={img1}></img>
        </div>
        <div className="bg-light p-5  rounded shadow">
          <h3 className="text-center mb-4">Have a question?</h3>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write a Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row text-center mb-5">
        <div className="col-md-4 ">
          <div className="p-4 shadow-sm rounded text-light bg-secondary">
            <i className="bi bi-telephone-fill text-primary fs-2"></i>
            <h5 className="mt-3">Our Telephone</h5>
            <p className="">
              Office Nos: 01334-235617,
              <br />
              01334-235054
              <br /> Moblie: +91-9368349990
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded text-light bg-secondary">
            <i className="bi bi-envelope-fill text-primary fs-2"></i>
            <h5 className="mt-3 ">Send us mail</h5>
            <p className="">
              haridwar@nielit.gov.in
              <br />
              dehradun@nielit.gov.in
              <br />
              contact@nielit.gov.in
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded text-light bg-secondary">
            <i className="bi bi-geo-alt-fill text-primary fs-2"></i>
            <h5 className="mt-3">Address</h5>
            <p className="">
              2nd Floor, Government Polytechnic Building, Plot No- 6C, Sector
              -11, Near Pentagon Mall, SIDCUL, Haridwar,Uttarakhand- 249403
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
