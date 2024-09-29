import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

export default function AddContract() {
  const [formData, setFormData] = useState({
    contract_name: "",
    signing_date: "",
    expiration_date: "",
    total_cost: "",
    admin_id: JSON.parse(sessionStorage.getItem("user")).id, // depending on where omar stores id
    user_id: "",
    subscriptions_id: "",
    status: "Pending", // default value
  });

  const [subscriptions, setSubscriptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);

  async function fetchSubs() {
    const responsee = await axios.get(
      "http://127.0.0.1:8000/api/Subscriptions"
    );
    setSubscriptions(responsee.data.subscriptions);
    if (!render) {
      setRender(true);
    }
  }

  async function fetchUsers() {
    const responsee = await axios.get("http://127.0.0.1:8000/api/Users");
    setUsers(responsee.data.users);
    if (!render) {
      setRender(true);
    }
  }

  // Fetch subscriptions and users from the API when the component mounts
  useEffect(() => {
    // Fetch subscriptions
    fetchUsers();
    fetchSubs();
  }, []);

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Post form data to API (use your actual API endpoint)
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/api/storeContract", formData)
      .then((response) => {
        console.log("Contract successfully created:", response.data);
        // Optionally, reset form or show success message
      })
      .catch((error) => {
        console.error("Error creating contract:", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Contract Name */}
      <Form.Group as={Row} className="mb-3" controlId="contractName">
        <Form.Label column sm={2}>
          Contract Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="contract_name"
            value={formData.contract_name}
            onChange={handleChange}
            placeholder="Enter contract name"
            required
          />
        </Col>
      </Form.Group>

      {/* Signing Date */}
      <Form.Group as={Row} className="mb-3" controlId="signingDate">
        <Form.Label column sm={2}>
          Signing Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="date"
            name="signing_date"
            value={formData.signing_date}
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      {/* Expiration Date */}
      <Form.Group as={Row} className="mb-3" controlId="expirationDate">
        <Form.Label column sm={2}>
          Expiration Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="date"
            name="expiration_date"
            value={formData.expiration_date}
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      {/* Total Cost */}
      <Form.Group as={Row} className="mb-3" controlId="totalCost">
        <Form.Label column sm={2}>
          Total Cost
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            step="0.01"
            name="total_cost"
            value={formData.total_cost}
            onChange={handleChange}
            placeholder="Enter total cost"
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="adminId">
        <Form.Label column sm={2}>
          User
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.full_name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Subscriptions */}
      <Form.Group as={Row} className="mb-3" controlId="subscriptionsId">
        <Form.Label column sm={2}>
          Subscription
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            name="subscriptions_id"
            value={formData.subscriptions_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Subscription</option>
            {subscriptions.length !== 0 ? (
              subscriptions.map((subscription) => (
                <option key={subscription.id} value={subscription.id}>
                  {subscription.name}
                </option>
              ))
            ) : (
              <option>No Subscriptions Available</option>
            )}
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Status */}
      <Form.Group as={Row} className="mb-3" controlId="status">
        <Form.Label column sm={2}>
          Status
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Expired">Expired</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="outline-danger" type="submit">
        Create Contract
      </Button>
    </Form>
  );
}
