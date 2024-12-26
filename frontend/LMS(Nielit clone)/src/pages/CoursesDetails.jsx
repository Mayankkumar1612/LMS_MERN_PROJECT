import { useParams, Link } from 'react-router-dom';
import { Container, Card, } from 'react-bootstrap';

const CourseDetails = () => {
  const { id } = useParams();

  const courseData = {
    1: { title: 'React Basics', description: 'Learn the basics of React, including components, state, and props.' },
    2: { title: 'Node.js Essentials', description: 'Master Node.js to build backend applications.' },
    3: { title: 'MongoDB 101', description: 'Learn how to use MongoDB for storing and managing data.' },
  };

  const course = courseData[id];

  return (
    <Container className="mt-5">
      {course ? (
        <Card>
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Link to="/courses" className="btn btn-secondary">
              Back to Courses
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <h3 className="text-danger">Course not found!</h3>
      )}
    </Container>
  );
};

export default CourseDetails;
