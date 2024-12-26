import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profilePic from "../assets/profile.jpg"

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/auth/login");
  };

  return (
    <Container>
      <h1>Welcome to <span>Unstop</span></h1>
      <ProfileCard>
        <img src={profilePic} alt="User" />
        <h3>Michael Dam</h3>
        <p>example@gmail.com</p>
        <p>Female</p>
        <button onClick={handleLogout}>Logout</button>
      </ProfileCard>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  span {
    color: #6c63ff;
  }
`;

const ProfileCard = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  button {
    background-color: #6c63ff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

