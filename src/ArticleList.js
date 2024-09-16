import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ArticleList.css'; // Import custom CSS file for ArticleList styling
import { useUser } from './userContext';
import { db } from './firebase';
import { doc, updateDoc } from "firebase/firestore";

// ArticleList component

const ArticleList = ({ articles }) => {
  // Filter out articles marked as "[removed]"
  const { state, setUserHistory, setLikedArticles, setDislikedArticles } = useUser();
  const filteredArticles = articles.filter(article => article.title !== '[Removed]');

  // Load liked and disliked articles from user state on component mount
  useEffect(() => {
    // Code to load liked and disliked articles if needed
    console.log("current user state", state)
  }, []);

  // Function to handle liking or disliking an article
  const handleReaction = (article, reactionType) => {
    let updatedLikedArticles = [...state.liked_articles];
    let updatedDislikedArticles = [...state.disliked_articles];
  
    if (reactionType === 'like') {
      // Check if the article is already in liked articles
      const index = updatedLikedArticles.findIndex(arc => arc.title === article.title);
      if (index !== -1) {
        // If already liked, remove it
        updatedLikedArticles.splice(index, 1);
      } else {
        // If not liked, add it
        updatedLikedArticles.push({ title: article.title, category: article.category });
      }
    } else if (reactionType === 'dislike') {
      // Check if the article is already in disliked articles
      const index = updatedDislikedArticles.findIndex(arc => arc.title === article.title);
      if (index !== -1) {
        // If already disliked, remove it
        updatedDislikedArticles.splice(index, 1);
      } else {
        // If not disliked, add it
        updatedDislikedArticles.push({ title: article.title, category: article.category });
      }
    }
  
    // Update user state
    setLikedArticles(updatedLikedArticles);
    setDislikedArticles(updatedDislikedArticles);
  
    // Update user data in database
    const updatedUserData = { ...state, liked_articles: updatedLikedArticles, disliked_articles: updatedDislikedArticles };
    updateUserDataDb(updatedUserData, "feedback");
    updateUserFeedback(updatedUserData.id, article.title, reactionType)
  };
  

  const updateUserHistory = async (userId) => {
    const response = await fetch(`http://localhost:5001/update_user_view_history?userId=${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("User History Updated")
  }

  const updateUserFeedback = async (userId, articleTitle, feedback ) => {
    const response = await fetch('http://localhost:5001/set_feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        articleTitle: articleTitle,
        feedback: feedback
      })
    });
    // const response = await fetch(`http://localhost:5001/set_feedback?userId=${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("User Feedback Updated")
  }

  const updateUserDataDb = (userData, updateType) => {
    const docRef = doc(db, "users", userData.id);
    updateDoc(docRef, userData).then(async () => {
      if (updateType === "history") {
        await updateUserHistory(userData.id)
      }
      // if (updateType == "feedback"){
      //   await updateUserFeedback(userData.id, )

      // }
    })
  }

  const onClickHistory = (article) => {
    console.log("inside user history")
    setUserHistory(article);
    if (state.user_history.length > 0) {
      updateUserDataDb(state, "history");
    }
  }

  return (
    <Container>
      <Row className="article-list">
        {filteredArticles.map((article, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4}>
            <Card className="article-card">
              <div className="article-img-wrapper">
                <Card.Img className="article-img" variant="top" src={article.urlToImage} />
              </div>
              <Card.Body>
                <Card.Title className="article-title">{article.title}</Card.Title>
                <Card.Text className="article-description">{article.short_description}</Card.Text>
                <Card.Text className="article-details"><strong>Author:</strong> {article.author}</Card.Text>
                <Card.Text className="article-details"><strong>Category:</strong>
                  <span className="category">{article.category}</span></Card.Text>
                <Button variant="primary" href={article.url} target="_blank" className="read-more-btn" onClick={() => onClickHistory(article)}>Read More</Button>
                {
                  state.liked_articles.some(arc => arc.title === article.title) && (
                    <Button variant="outline-secondary" onClick={() => handleReaction(article, 'like')} className="reaction-btn-liked">
                      <span role="img" aria-label="Like">👍</span>
                    </Button>
                  )
                }

                {
                  !state.liked_articles.some(arc => arc.title === article.title) && (
                    <Button variant="outline-secondary" onClick={() => handleReaction(article, 'like')} className="reaction-btn">
                      <span role="img" aria-label="Like">👍</span>
                    </Button>)
                }

                {
                  state.disliked_articles.some(arc => arc.title === article.title) && (
                    <Button variant="outline-secondary" onClick={() => handleReaction(article, 'dislike')} className="reaction-btn-disliked">
                      <span role="img" aria-label="Dislike">👎</span>
                    </Button>
                  )
                }

                {
                  !state.disliked_articles.some(arc => arc.title === article.title) && (
                    <Button variant="outline-secondary" onClick={() => handleReaction(article, 'dislike')} className="reaction-btn">
                      <span role="img" aria-label="Dislike">👎</span>
                    </Button>)
                }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
