import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './landing-page.css';
import { useAuth } from './AuthContext';
import {db} from './firebase'
import { getDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useUser } from './userContext';


const LandingPage = () => {
  const { user } = useAuth();
  const {state, setUserData} = useUser()

console.log("user", user)

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef).then((docsnap) => {
        if (docsnap.exists) {
          const data = docsnap.data();
          if (!data) {
            // If user data does not exist, add default user data
            const defaultUserData = {
              email: user.email,
              id: user.uid,
              liked_articles: [],
              disliked_articles: [],
              user_categories: {},
              user_history: [],
              user_keywords: {},
              username: user.email || ""
            };
            setDoc(docRef, defaultUserData).then(() => {
              setUserData(defaultUserData);
              console.log("Default user data added:", defaultUserData);
            }).catch((error) => {
              console.error("Error adding default user data:", error);
            });
          } else {
            setUserData(data);
            console.log("User data loaded:", data);
          }
        } else {
          console.log('Document does not exist');
        }
      }).catch((error) => {
        console.error("Error getting user document:", error);
      });
    }
  }, []);
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4">Welcome to our News App</h1>
              <p className="lead">
                Stay updated with the latest news from around the world.
              </p>
              {user ? (
                <Link to="/articles">
                  <Button variant="primary" size="lg">View Feed</Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="primary" size="lg">Login</Button>
                </Link>
              )}
            </Col>
            <Col md={6}>
              <img src="https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg" alt="News App" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
