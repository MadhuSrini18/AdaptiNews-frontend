import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Preferences.css';
import { useLocation } from 'react-router-dom';
import {useAuth} from './AuthContext'
import {db} from './firebase'
import {doc, setDoc, updateDoc} from 'firebase/firestore'
import { useUser } from './userContext';

const Preferences = () => {
  
  const currentUser = useAuth();
  const {state, setUserData} = useUser()

  console.log(currentUser)

  const [preferences, setPreferences] = useState({
    categories: []
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
  
    setPreferences(prevState => {
      // Determine if we're adding or removing the item
      const updatedCategories = checked
        ? [...prevState.categories, value] // Add to the array
        : prevState.categories.filter(item => item !== value); // Remove from the array
  
      return { ...prevState, categories: updatedCategories };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    const userCategories = preferences.categories.reduce((acc, categoryName) => {
      acc[categoryName] = {
        score: 0.5,
        last_modified: Date.now() / 1000
      };
      return acc;
    }, {});


    const userData = {
          "id": currentUser.user.uid,
          "username": currentUser.user.email,
          "email": currentUser.user.email,
          "user_history": {},
          "user_keywords": {},
          "user_categories": userCategories,
          "liked_articles": [],
          "disliked_articles": []
      }

    console.log(userData)
    setDoc(doc(db, 'users', currentUser.user.uid),userData)
    setUserData(userData)

    alert('Preferences saved successfully!');
  };

  return (
    <Container>
  <Row>
    <Col>
      <h2 className="preferences-title">Manage Your News Preferences</h2>
      <Form className="preferences-form" onSubmit={handleSubmit}>
        <Form.Group controlId="categories">
          <Form.Label>Preferred Categories:</Form.Label>
          <div className="mb-3">
            {['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'].map((category) => (
              <Form.Check 
                key={category}
                type="checkbox" 
                label={category.charAt(0).toUpperCase() + category.slice(1)} // Capitalize the first letter
                name="categories" 
                value={category}
                checked={preferences.categories.includes(category)}
                onChange={handleChange}
              />
            ))}
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">Save Preferences</Button>
      </Form>
    </Col>
  </Row>
</Container>

  );
};

export default Preferences;
