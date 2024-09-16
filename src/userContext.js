import React, { createContext, useReducer, useContext } from 'react';

// Create a context
const UserContext = createContext();

// Actions
const SET_USER_DATA = 'SET_USER_DATA';
const SET_LIKED_ARTICLES = 'SET_LIKED_ARTICLES';
const SET_DISLIKED_ARTICLES = 'SET_DISLIKED_ARTICLES';
const SET_USER_HISTORY = 'SET_USER_HISTORY';

function userReducer(state, action) {
    switch (action.type) {
      case SET_USER_DATA:
        return { ...state, ...action.payload };
      case SET_LIKED_ARTICLES:
        return {
          ...state,
          liked_articles: state.liked_articles.length > 0
            ? [...state.liked_articles, ...action.payload] 
            : action.payload,
        };
      case SET_DISLIKED_ARTICLES:
        return {
          ...state,
          disliked_articles: state.disliked_articles.length > 0
            ? [...state.disliked_articles, ...action.payload]
            : action.payload,
        };
      case SET_USER_HISTORY:
        return {
          ...state,
          user_history: state.user_history.length > 0
            ? [...state.user_history, ...action.payload]
            : action.payload,
        };
      default:
        return state;
    }
  }

// Initial State
const initialState = {
    email: '', 
    id: '', 
    liked_articles: [], // Assuming this should be an array initially
    disliked_articles: [], // Assuming this should be an array initially
    user_categories: {},
    user_history: [], 
    user_keywords: {}, 
    username: '', 
  };

// Create a provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Method to update the entire user data
  const setUserData = (userData) => {
    dispatch({ type: SET_USER_DATA, payload: userData });
  };

  // Method to update liked articles
  const setLikedArticles = (likedArticles) => {
    dispatch({ type: SET_LIKED_ARTICLES, payload: likedArticles });
  };

  // Method to update disliked articles
  const setDislikedArticles = (dislikedArticles) => {
    dispatch({ type: SET_DISLIKED_ARTICLES, payload: dislikedArticles });
  };

  // Method to update user history
  const setUserHistory = (userHistory) => {
    dispatch({ type: SET_USER_HISTORY, payload: [userHistory] });
  };

  return (
    <UserContext.Provider value={{ state, setUserData, setLikedArticles, setDislikedArticles, setUserHistory }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
