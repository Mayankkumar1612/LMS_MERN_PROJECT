import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

const CoursesPage = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", description: "Learn the basics of React." },
    {
      id: 2,
      title: "Node.js Essentials",
      description: "Master Node.js for backend.",
    },
    { id: 3, title: "MongoDB 101", description: "Introduction to MongoDB." },
  ]);

  const [newCourse, setNewCourse] = useState({ title: "", description: "" });

  // Add a new course
  const addCourse = () => {
    if (newCourse.title && newCourse.description) {
      const id = courses.length ? courses[courses.length - 1].id + 1 : 1;
      setCourses([...courses, { id, ...newCourse }]);
      setNewCourse({ title: "", description: "" });
    }
  };

  // Delete a course
  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <>
      {/* Search Bar */}
      <section className="py-4 bg-primary-subtle">
        <div className="container text-center">
          <h2 className="mb-3 fw-bold">Find the Right Course for You</h2>
          <input
            type="text"
            className="form-control w-50 mx-auto"
            placeholder="Search for courses..."
            aria-label="Search for courses"
          />
        </div>
      </section>

      <Container>
        <h1 className="mt-4 mb-4 text-center">Available Courses</h1>

        {/* Form to add a new course */}
        <Form className="mb-4">
          <Row>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
              />
            </Col>
            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Course Description"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
              />
            </Col>
            <Col md={3}>
              <Button variant="primary" onClick={addCourse}>
                Add Course
              </Button>
            </Col>
          </Row>
        </Form>

        {/* Display courses */}
        <Row>
          {courses.map((course) => (
            <Col md={4} key={course.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Link
                    to={`/course/${course.id}`}
                    className="btn btn-info me-2"
                  >
                    View Details
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CoursesPage;