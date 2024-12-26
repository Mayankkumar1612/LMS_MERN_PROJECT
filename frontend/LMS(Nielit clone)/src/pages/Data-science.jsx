import img1 from "../assets/data_science.png";
import { Link } from "react-router-dom";

const Datascience = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1>Data Science</h1>
          <p>
            Learn to set up a website for your company by creating web pages,
            themes, building web forms, publishing blogs, and building a
            knowledge base with help articles.
          </p>
          <div className="instructor">
            <h4>Instructors:</h4>
            <div className="d-flex align-items-center">
              <span className="me-2 fw-bold">Linet Sherin Varghese</span>
            </div>
          </div>
          <p className="mt-2">
            Having an online presence with a website is important to establish
            the credibility of your business. A great website with great content
            will help you massively irrespective of which industry, domain, and
            region you operate in.
          </p>
          <p>
            A website with a few web pages on your company vision, products,
            services, team, etc. helps you build a positive opinion about your
            company. You can even engage your visitors with announcements on
            important developments in your company like the launch of new
            products.
          </p>
          <p>
            By the end of the course, you will have a deeper understanding of:
          </p>
          <ul>
            <li>Setting up a website for your company</li>
            <li>Creating engaging web pages</li>
            <li>Choosing the right theme for your site</li>
            <li>Building web forms and integrating them</li>
            <li>Publishing blogs and knowledge articles</li>
          </ul>
          <Link to="/" className="btn btn-primary mb-2 me-3">Back</Link>
          <Link to="/signinform" className="btn btn-primary mb-2">Enroll</Link>
        </div>
        <div className="col-md-6 mt-5">
          <img
            src={img1}
            alt="Instructor"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Datascience;
