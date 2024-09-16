import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UserProfile = () => {
 const userData = {
    "user_id": "123456789",
    "username": "hv2595@gmail.com",
    "email": "hv2595@gmail.com",
    "password_hash": "hashed_password_here",
    "profile_picture": "https://example.com/profile_picture.jpg",
    "user_history": {
        "articles": [
            {
                "title": "Study Reveals Surprising Link Between Coffee Consumption and Memory Enhancement",
                "category": "Life"
            },
            {
                "title": "Groundbreaking AI Breakthrough: Self-Driving Cars Master Urban Navigation Without Human Assistance",
                "category": "Technology"
            }
        ]
    },
    "user_keywords": {
        "exploring": {
            "score": 1.4400000000000002,
            "last_modified": 1711820408.861159
        },
        "wonders": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "deep": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "sea": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "creatures": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "dive": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "abyss": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "mysteries": {
            "score": 0.8,
            "last_modified": 1711820405.757194
        },
        "universe": {
            "score": 0.8,
            "last_modified": 1711820405.757194
        },
        "journey": {
            "score": 0.8,
            "last_modified": 1711820405.757194
        },
        "space": {
            "score": 0.8,
            "last_modified": 1711820405.757194
        },
        "future": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "renewable": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "energy": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "innovations": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "shaping": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "sustainable": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "world": {
            "score": 0.8,
            "last_modified": 1711820405.149862
        },
        "understanding": {
            "score": 1.4400000000000002,
            "last_modified": 1711820405.020253
        },
        "climate": {
            "score": 0.8,
            "last_modified": 1711820405.020253
        },
        "change": {
            "score": 0.8,
            "last_modified": 1711820405.020253
        },
        "impact": {
            "score": 0.8,
            "last_modified": 1711820405.020253
        },
        "causes": {
            "score": 0.8,
            "last_modified": 1711820405.020253
        },
        "solutions": {
            "score": 0.8,
            "last_modified": 1711820405.020253
        },
        "rise": {
            "score": 0.8,
            "last_modified": 1711820404.893028
        },
        "plant": {
            "score": 0.8,
            "last_modified": 1711820404.893028
        },
        "based": {
            "score": 0.8,
            "last_modified": 1711820404.893028
        },
        "diets": {
            "score": 0.8,
            "last_modified": 1711820404.893028
        },
        "vegan": {
            "score": 0.8,
            "last_modified": 1711820404.893028
        },
        "lifestyle": {
            "score": 0.8,
            "last_modified": 1711820404.893028
        },
        "art": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "photography": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "capturing": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "moments": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "last": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "lifetime": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "benefits": {
            "score": 0.8,
            "last_modified": 1711820404.015541
        },
        "meditation": {
            "score": 0.8,
            "last_modified": 1711820404.015541
        },
        "improve": {
            "score": 0.8,
            "last_modified": 1711820404.015541
        },
        "mental": {
            "score": 0.8,
            "last_modified": 1711820404.015541
        },
        "well": {
            "score": 0.8,
            "last_modified": 1711820404.015541
        },
        "being": {
            "score": 0.8,
            "last_modified": 1711820404.015541
        },
        "thinking": {
            "score": 1.4400000000000002,
            "last_modified": 1711820403.229797
        },
        "unlocking": {
            "score": 0.8,
            "last_modified": 1711820403.229797
        },
        "creativity": {
            "score": 0.8,
            "last_modified": 1711820403.229797
        },
        "techniques": {
            "score": 0.8,
            "last_modified": 1711820403.229797
        },
        "boost": {
            "score": 0.8,
            "last_modified": 1711820403.229797
        },
        "innovative": {
            "score": 0.8,
            "last_modified": 1711820403.229797
        },
        "power": {
            "score": 0.8,
            "last_modified": 1711820402.950997
        },
        "positive": {
            "score": 0.8,
            "last_modified": 1711820402.950997
        },
        "transforming": {
            "score": 0.8,
            "last_modified": 1711820402.950997
        },
        "mindset": {
            "score": 0.8,
            "last_modified": 1711820402.950997
        },
        "success": {
            "score": 0.8,
            "last_modified": 1711820402.950997
        },
        "delving": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "ancient": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "history": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "unraveling": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "secrets": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "past": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "apple": {
            "score": 0,
            "last_modified": 1648700000
        },
        "fruit": {
            "score": 0,
            "last_modified": 1648700000
        }
    },
    "user_categories": {
        "Nature": {
            "score": 0.8,
            "last_modified": 1711820408.861159
        },
        "Science": {
            "score": 1.4400000000000002,
            "last_modified": 1711820405.757194
        },
        "Environment": {
            "score": 0.8,
            "last_modified": 1711820405.020253
        },
        "Health": {
            "score": 1.4400000000000002,
            "last_modified": 1711820404.893028
        },
        "Art": {
            "score": 0.8,
            "last_modified": 1711820404.622761
        },
        "Education": {
            "score": 0.8,
            "last_modified": 1711820403.229797
        },
        "Self-Help": {
            "score": 0.8,
            "last_modified": 1711820402.950997
        },
        "History": {
            "score": 0.8,
            "last_modified": 1711820401.579802
        },
        "Business": {
            "score": 0,
            "last_modified": 1648700000
        },
        "Opinion/Gadfly": {
            "score": 0,
            "last_modified": 1648700000
        }
    },
    "liked_articles": [
        {
            "title": "Delving into Ancient History: Unraveling the Secrets of the Past",
            "category": "History"
        },
        {
            "title": "The Power of Positive Thinking: Transforming Your Mindset for Success",
            "category": "Self-Help"
        },
        {
            "title": "Unlocking Creativity: Techniques to Boost Your Innovative Thinking",
            "category": "Education"
        },
        {
            "title": "The Benefits of Meditation: How It Can Improve Your Mental Well-being",
            "category": "Health"
        },
        {
            "title": "The Art of Photography: Capturing Moments That Last a Lifetime",
            "category": "Art"
        },
        {
            "title": "The Rise of Plant-Based Diets: Understanding the Vegan Lifestyle",
            "category": "Health"
        },
        {
            "title": "Understanding Climate Change: Impact, Causes, and Solutions",
            "category": "Environment"
        },
        {
            "title": "The Future of Renewable Energy: Innovations Shaping a Sustainable World",
            "category": "Science"
        },
        {
            "title": "Exploring the Mysteries of the Universe: A Journey through Space",
            "category": "Science"
        },
        {
            "title": "Exploring the Wonders of Deep Sea Creatures: A Dive into the Abyss",
            "category": "Nature"
        }
    ],
    "disliked_articles": []
}
  const { username, email, profile_picture, user_history, user_keywords, user_categories, liked_articles, disliked_articles } = userData;

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>{username}'s Profile</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            {/* <Card.Img variant="top" src={profile_picture} /> */}
            <Card.Body>
              {/* <Card.Title>{username}</Card.Title> */}
              <Card.Text>Email: {email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h4>User History</h4>
          <ul>
            {user_history.articles.map((article, index) => (
              <li key={index}>{article.title} - {article.category}</li>
            ))}
          </ul>
          <h4>User Keywords</h4>
          <ul>
            {Object.entries(user_keywords).map(([keyword, data]) => (
              <li key={keyword}>{keyword} - Score: {data.score}</li>
            ))}
          </ul>
          <h4>User Categories</h4>
          <ul>
            {Object.entries(user_categories).map(([category, data]) => (
              <li key={category}>{category} - Score: {data.score}</li>
            ))}
          </ul>
          <h4>Liked Articles</h4>
          <ul>
            {liked_articles.map((article, index) => (
              <li key={index}>{article.title} - {article.category}</li>
            ))}
          </ul>
          <h4>Disliked Articles</h4>
          <ul>
            {disliked_articles.map((article, index) => (
              <li key={index}>{article.title} - {article.category}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
