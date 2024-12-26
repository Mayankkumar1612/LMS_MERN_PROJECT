import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CoursesDetails from "./pages/CoursesDetails";
import AuthPage from "./components/AuthPage";
import Centreform from "../src/pages/Centre.form";
import ESform from "../src/pages/ES.form";
import ESExamCentreform from "../src/pages/ES.Exam.Centre.form";
import Webdevelopment from "./pages/Web-development";
import Cybersecurity from "./pages/Cyber-security";
import Datascience from "./pages/Data-science";
import Internetofthings from "./pages/Internet-of-things";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/examportal" element={<Centreform />} />
        <Route path="/examportal/centreform" element={<Centreform />} />
        <Route path="/examportal/examsuperintendent" element={<ESform />} />
        <Route path="/examportal/esexamcentre" element={<ESExamCentreform />} />
        <Route path="/signinform" element={<AuthPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/courses/web-development" element={<Webdevelopment />} />
        <Route path="/courses/cybersecurity" element={<Cybersecurity />} />
        <Route path="/courses/data-science" element={<Datascience />} />
        <Route path="/courses/Internetofthings" element={<Internetofthings />} />
      </Routes>
    </>
  );
};

export default App;
