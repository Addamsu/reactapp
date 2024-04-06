
import React from 'react';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Welcome</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Card style={{ width: '18rem', margin: '20px', backgroundColor: '#ffd700', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#2c3e50' }}>Daily Inspiration</Card.Title>
              <Card.Text style={{ color: '#2c3e50' }}>
                Discover motivational quotes, inspiring stories, and uplifting content to kickstart your day.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '20px', backgroundColor: '#3498db', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#ffffff' }}>Latest Updates</Card.Title>
              <Card.Text style={{ color: '#ffffff' }}>
                Stay updated with the latest news and events happening around the world.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', margin: '20px', backgroundColor: '#ff6347', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ color: '#ffffff' }}>Customer Reviews</Card.Title>
              <Card.Text style={{ color: '#ffffff' }}>
                See what our satisfied customers have to say about their experience with our products and services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default App;