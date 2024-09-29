import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Offcanvas,
} from "react-bootstrap";
import useWindowSize from "./useWindowSize"; // Custom hook to detect window size

export default function AdminPage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { width } = useWindowSize(); // Custom hook to detect screen width
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user || user.role_id !== 1) {
      navigate("/"); // Redirect to home if user doesn't exist or role_id is not 1
    }
  }, [user, navigate]);

  const handleCloseSidebar = () => setShowSidebar(false);
  const handleShowSidebar = () => setShowSidebar(true);

  return (
    <div>
      {/* Admin Dashboard Navbar */}
      <Navbar bg="danger" variant="dark" fixed="top" className="shadow">
        <Container fluid>
          {/* Toggle button for the sidebar, only show on small screens */}
          {width < 992 && (
            <Button
              variant="outline-light"
              className="me-2"
              onClick={handleShowSidebar}
            >
              <i className="bi bi-list"></i>
            </Button>
          )}
          <Navbar.Brand className="ms-auto">Admin Dashboard</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid style={{ marginTop: "60px" }}>
        <Row>
          {/* Offcanvas Sidebar for small screens */}
          {width < 992 && (
            <Offcanvas
              show={showSidebar}
              onHide={handleCloseSidebar}
              className="bg-light"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <img
                    src="assets/img/logo/logo-2.svg"
                    alt="logo-img"
                    style={{ width: "150px", height: "auto" }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* Sidebar Menu */}
                <ListGroup variant="flush">
                  <ListGroup.Item
                    action
                    as={Link}
                    to="All"
                    className="text-danger"
                    onClick={handleCloseSidebar}
                  >
                    <i className="bi bi-house-door-fill"></i> All Contracts
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    as={Link}
                    to="Pending"
                    className="text-danger"
                    onClick={handleCloseSidebar}
                  >
                    <i className="bi bi-table"></i> Pending Contracts
                  </ListGroup.Item>
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          )}

          {/* Static Sidebar for larger screens */}
          {width >= 992 && (
            <Col lg={2} className="bg-light p-0">
              <div className="text-center my-4">
                {/* Logo */}
                <img
                  src="assets/img/logo/logo-2.svg"
                  alt="logo-img"
                  style={{ width: "150px", height: "auto" }}
                />
              </div>
              {/* Sidebar Menu */}
              <ListGroup variant="flush">
                <ListGroup.Item
                  action
                  as={Link}
                  to="All"
                  className="text-danger"
                >
                  <i className="bi bi-house-door-fill"></i> All Contracts
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  as={Link}
                  to="Approved"
                  className="text-danger"
                >
                  <i class="bi bi-collection-fill"></i> Approved Contracts
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  as={Link}
                  to="Expired"
                  className="text-danger"
                >
                  <i class="bi bi-collection-fill"></i> Expired Contracts
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  as={Link}
                  to="Pending"
                  className="text-danger"
                >
                  <i class="bi bi-collection-fill"></i> Pending Contracts
                </ListGroup.Item>
              </ListGroup>
            </Col>
          )}

          {/* Main Content Area */}
          <Col lg={10} className="p-4">
            {/* Content Outlet for child routes */}
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
