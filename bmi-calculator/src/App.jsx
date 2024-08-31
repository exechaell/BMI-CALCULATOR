import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setMessage(getBmiMessage(bmiValue));
    } else {
      setBmi(null);
      setMessage('Please enter valid weight and height');
    }
  };

  const getBmiMessage = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">BMI Calculator</h3>
          <Form onSubmit={calculateBMI}>
            <Form.Group className="mb-3" controlId="formWeight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter weight in kilograms"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height in centimeters"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Calculate BMI
            </Button>
          </Form>

          {bmi && (
            <Alert variant="info" className="mt-3 text-center">
              Your BMI is: {bmi} ({message})
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
