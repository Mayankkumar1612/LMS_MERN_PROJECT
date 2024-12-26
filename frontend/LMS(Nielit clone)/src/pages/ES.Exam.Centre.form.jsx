import img1 from "../assets/exam.png";
import { useState, useRef } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const ESExamCentreform = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [cityName, setCityName] = useState("");
  const [esCode, setEsCode] = useState("");
  const [centreName, setCentreName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const submitForm = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await fetch("http://localhost:5000/examCentre", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            esCode,
            centreName,
            examDate,
            cityName,
            stateid,
            countryid,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        const result = await response.json();
        console.log("Form submitted successfully:", result.message);

        setCountryid(0);
        setstateid(0);
        setCityName("");
        setEsCode("");
        setCentreName("");
        setExamDate("");
        formRef.current.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
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
        <h2 className="text-center my-4 fw-bold">ES EXAM CENTRE</h2>
        <div className="card-body">
          <form
            ref={formRef}
            onSubmit={submitForm}
            noValidate
            className={`needs-validation ${validated ? "was-validated" : ""}`}
          >
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="inputCentreCode" className="form-label mt-3">
                      ES Code
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="inputCentreCode"
                      value={esCode}
                      onChange={(e) => setEsCode(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid ES Code.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputCentreName" className="form-label mt-3">
                      Centre Name
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="inputCentreName"
                      value={centreName}
                      onChange={(e) => setCentreName(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid Centre Name.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputExamDate" className="form-label mt-3">
                      Exam Date
                    </label>
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control mt-3"
                      id="inputExamDate"
                      value={examDate}
                      onChange={(e) => setExamDate(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please select a valid exam date.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="inputCountry" className="form-label mt-3">
                      Country
                    </label>
                  </td>
                  <td>
                    <CountrySelect
                      className="form-select mt-3"
                      onChange={(e) => setCountryid(e.id)}
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
                    <label htmlFor="inputState" className="form-label mt-3">
                      State
                    </label>
                  </td>
                  <td>
                    <StateSelect
                      className="form-select mt-3"
                      countryid={countryid}
                      onChange={(e) => setstateid(e.id)}
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
                    <label htmlFor="inputCity" className="form-label mt-3">
                      Exam City
                    </label>
                  </td>
                  <td>
                    <CitySelect
                      className="form-select mt-3"
                      countryid={countryid}
                      stateid={stateid}
                      onChange={(e) => setCityName(e.name)}
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
};

export default ESExamCentreform;

