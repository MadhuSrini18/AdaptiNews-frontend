import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Import custom CSS file for Header styling
import { useAuth } from './AuthContext'; // Import useAuth hook

const Header = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
      <Navbar.Brand as={Link} to="/" className="font-weight-bold ml-4">Newsify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          <Nav.Link as={Link} to="/" className="mr-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/userprofile">User Profile</Nav.Link>
          {!user && (
            <Nav.Link as={Link} to="/login" className="mr-3">Login</Nav.Link>
          )}
          {user && (
            <NavDropdown
              title={user.email}
              id="basic-nav-dropdown"
              show={showDropdown}
              onClick={handleDropdownToggle}
              alignRight
              className="mr-4"
            >
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
          {user && (<Nav.Link as={Link} to="/personalizedfeed" className="mr-3">Personalized Feed</Nav.Link>)}
          {/* Add more navigation links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
