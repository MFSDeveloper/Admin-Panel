import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  // Static credentials
  const staticEmail = 'admin@example.com';
  const staticPassword = '123123';

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Check static data
    if (email === staticEmail && password === staticPassword) {
      setError('');
      // Redirect to admin dashboard
      navigate('/admin-dashboard'); // Redirect to the admin dashboard route
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Container style={{ maxWidth: '400px' }}>
        <Card className="p-4 shadow-sm">
          <h4 className="text-center mb-4 text-primary">Login</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Link to="/home">
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Link>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
