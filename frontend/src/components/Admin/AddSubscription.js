import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

export default function AddSubscription() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    speed: "",
    details: "",
    price: "",
    internet: false,
    TV: false,
    phone: false,
    type: "Package", // 'Subscription' or 'Package'
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle boolean changes (for radio buttons)
  const handleBooleanChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value === "true",
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/api/Subscriptions", formData)
      .then((response) => {
        console.log("Subscription successfully created:", response.data);
        // Optionally, reset form or show success message
      })
      .catch((error) => {
        console.error("Error creating subscription:", error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Subscription Name */}
      <Form.Group as={Row} className="mb-3" controlId="subscriptionName">
        <Form.Label column sm={2}>
          Subscription Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter subscription name"
            required
          />
        </Col>
      </Form.Group>

      {/* Company Name */}
      <Form.Group as={Row} className="mb-3" controlId="companyName">
        <Form.Label column sm={2}>
          Company Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </Col>
      </Form.Group>

      {/* Speed */}
      <Form.Group as={Row} className="mb-3" controlId="speed">
        <Form.Label column sm={2}>
          Speed
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="speed"
            value={formData.speed}
            onChange={handleChange}
            placeholder="Enter speed"
            required
          />
        </Col>
      </Form.Group>

      {/* Details */}
      <Form.Group as={Row} className="mb-3" controlId="details">
        <Form.Label column sm={2}>
          Details
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter details"
            rows={3}
            required
          />
        </Col>
      </Form.Group>

      {/* Price */}
      <Form.Group as={Row} className="mb-3" controlId="price">
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </Col>
      </Form.Group>

      {/* Internet */}
      <Form.Group as={Row} className="mb-3" controlId="internet">
        <Form.Label column sm={2}>
          Internet
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            inline
            type="radio"
            label="Yes"
            name="internet"
            value={true}
            checked={formData.internet === true}
            onChange={handleBooleanChange}
          />
          <Form.Check
            inline
            type="radio"
            label="No"
            name="internet"
            value={false}
            checked={formData.internet === false}
            onChange={handleBooleanChange}
          />
        </Col>
      </Form.Group>

      {/* TV */}
      <Form.Group as={Row} className="mb-3" controlId="tv">
        <Form.Label column sm={2}>
          TV
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            inline
            type="radio"
            label="Yes"
            name="TV"
            value={true}
            checked={formData.TV === true}
            onChange={handleBooleanChange}
          />
          <Form.Check
            inline
            type="radio"
            label="No"
            name="tv"
            value={false}
            checked={formData.tv === false}
            onChange={handleBooleanChange}
          />
        </Col>
      </Form.Group>

      {/* Phone */}
      <Form.Group as={Row} className="mb-3" controlId="phone">
        <Form.Label column sm={2}>
          Phone
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            inline
            type="radio"
            label="Yes"
            name="phone"
            value={true}
            checked={formData.phone === true}
            onChange={handleBooleanChange}
          />
          <Form.Check
            inline
            type="radio"
            label="No"
            name="phone"
            value={false}
            checked={formData.phone === false}
            onChange={handleBooleanChange}
          />
        </Col>
      </Form.Group>

      {/* Type (Subscription or Package) */}
      <Form.Group as={Row} className="mb-3" controlId="type">
        <Form.Label column sm={2}>
          Type
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="Subscription">Subscription</option>
            <option value="Package">Package</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="outline-danger" type="submit">
        Create Subscription
      </Button>
    </Form>
  );
}
