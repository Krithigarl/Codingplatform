import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">

        {/* Sidebar */}
        <Col md={2} className="dashboard-sidebar">
          <div className="logo">
            <h4>
              Code<span className="heading">Genius</span>
            </h4>
          </div>

          <Nav className="flex-column mt-4">
            <p to="/dashboard" className="nav-link">
              Dashboard
           </p>

            <p to="/courses" className="nav-link">
              My Courses
           </p>

            <p to="/mentor" className="nav-link">
              AI Mentor
           </p>

            <p to="/progress" className="nav-link">
              Progress
           </p>

            <p to="/profile" className="nav-link">
              Profile
            </p>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10}>
          <header className="dashboard-header">
            
          </header>
            <div className="dashboard-hero">
              <h3 className="pt-5">Welcome Back 👋</h3>
              <p>Continue your learning journey.</p>
            

            <button className="btn-dashboard">
              Continue Learning
            </button>
            </div>
          <Container className="mt-4">
            <Row>

              <Col md={3}>
                <div className="dashboard-card">
                  <h5>Courses</h5>
                  <h2>5</h2>
                </div>
              </Col>

              <Col md={3}>
                <div className="dashboard-card">
                  <h5>Completed</h5>
                  <h2>2</h2>
                </div>
              </Col>

              <Col md={3}>
                <div className="dashboard-card">
                  <h5>Progress</h5>
                  <h2>68%</h2>
                </div>
              </Col>

              <Col md={3}>
                <div className="dashboard-card">
                  <h5>Certificates</h5>
                  <h2>1</h2>
                </div>
              </Col>

            </Row>
          </Container>
        </Col>

      </Row>
    </Container>
  );
};

export default Dashboard;