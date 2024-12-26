import img1 from "../assets/exam.png";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const ESform = () => {
  const [formData, setFormData] = useState({
    esCode: "",
    esName: "",
    esSex: "",
    email: "",
    mobile: "",
    education: "",
    experience: "",
    jobType: "",
    address: "",
    countryId: 0,
    stateId: 0,
    city: null,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await fetch("http://localhost:5000/examSupritendent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted:", await response.json());
          setFormData({
            esCode: "",
            esName: "",
            esSex: "",
            email: "",
            mobile: "",
            education: "",
            experience: "",
            jobType: "",
            address: "",
            countryId: 0,
            stateId: 0,
            city: null,
          });
          setValidated(false);
        } else {
          console.error("Error submitting form:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    setValidated(true);
  };

  return (
    <div className="container d-flex py-3 align-items-center">
      <div className="align-items-center vh-100 bg-light pe-5 pt-5">
        <img src={img1} alt="Exam Illustration" className="img-fluid" />
      </div>
      <div className="card shadow w-50">
        <h2 className="text-center my-4 fw-bold">EXAM SUPERINTENDENT</h2>
        <div className="card-body">
          <form
            onSubmit={submitForm}
            noValidate
            className={validated ? "was-validated" : ""}
          >
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="esCode" className="form-label mt-3">
                      ES Code
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="esCode"
                      value={formData.esCode}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid ES Code.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="esName" className="form-label mt-3">
                      ES Name
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="esName"
                      value={formData.esName}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid ES Name.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="sex" className="form-label mt-3">
                      SEX
                    </label>
                  </td>
                  <td>
                    <input
                      className="form-check-input ms-2"
                      type="radio"
                      name="sex"
                      id="sexMale"
                      value="Male"
                      checked={formData.sex === "Male"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          sex: e.target.value,
                        }))
                      }
                      required
                    />
                    <label className="form-check-label ms-2" htmlFor="sexMale">
                      Male
                    </label>
                    <input
                      className="form-check-input ms-2"
                      type="radio"
                      name="sex"
                      id="sexFemale"
                      value="Female"
                      checked={formData.sex === "Female"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          sex: e.target.value,
                        }))
                      }
                      required
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="sexFemale"
                    >
                      Female
                    </label>
                    <div className="invalid-feedback">
                      Please select your sex.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email" className="form-label mt-3">
                      Email address
                    </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      className="form-control mt-3"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="mobile" className="form-label mt-3">
                      Mobile
                    </label>
                  </td>
                  <td>
                    <input
                      type="tel"
                      className="form-control mt-3"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid mobile number.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="education" className="form-label mt-3">
                      Education
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Highest Qualification"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide your highest qualification.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="experience" className="form-label mt-3">
                      Experience
                    </label>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control mt-3"
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide your experience.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="jobType" className="form-label mt-3">
                      Job Type
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      placeholder="Contractual/permanent"
                      required
                    />
                    <div className="invalid-feedback">
                      Please specify the job type.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="address" className="form-label mt-3">
                      Address
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide your address.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="countryId" className="form-label mt-3">
                      Country
                    </label>
                  </td>
                  <td>
                    <CountrySelect
                      className="form-select mt-3"
                      onChange={(e) => handleSelectChange("countryId", e.id)}
                      placeHolder="Select Country"
                      required
                    />
                    <div className="invalid-feedback">
                      Please select a country.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="stateId" className="form-label mt-3">
                      State
                    </label>
                  </td>
                  <td>
                    <StateSelect
                      className="form-select mt-3"
                      countryid={formData.countryId}
                      onChange={(e) => handleSelectChange("stateId", e.id)}
                      placeHolder="Select State"
                      required
                    />
                    <div className="invalid-feedback">
                      Please select a state.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="city" className="form-label mt-3">
                      City
                    </label>
                  </td>
                  <td>
                    <CitySelect
                      className="form-select mt-3"
                      countryid={formData.countryId}
                      stateid={formData.stateId}
                      onChange={(e) => handleSelectChange("city", e)}
                      placeHolder="Select City"
                      required
                    />
                    <div className="invalid-feedback">
                      Please select a city.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ESform;