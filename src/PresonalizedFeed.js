import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import { getNewsArticles } from './api';

import {db} from './firebase'
import { doc, collection, getDocs } from 'firebase/firestore';
import { useAuth } from './AuthContext';

// export const getNewsArticles = async () => {
  
// };

const PersonalizedFeed = () => {
    const currentUser = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    try {
      setLoading(true)
      if(currentUser.user){
        getPersonalizedNews(currentUser.user.uid);
      }
    } catch (error) {
      console.log('Error getting news:', error)
      setLoading(false)
    }
  }, loading)

  const getPersonalizedNews = async (userId) => {

    try {
      const response = await fetch(`http://localhost:5001/get_personalized_news?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response)
      const data = await response.json();
      console.log('Personalized news data:', data);
      setArticles(data)
      setLoading(false)
      // Do something with the data, like setting state
    } catch (error) {
      console.error('Error fetching personalized news:', error);
      setLoading(false)
    }
  };

    // if (currentUser){
    //     getPersonalizedNews(currentUser.user.uid)
    //     // setArticles(docsArray)
    //     // setLoading(false)
    // }

//   useEffect(() => {
//     try {
//       setLoading(true);
  
//       // Check if data exists in cache
//       const cachedNewsData = sessionStorage.getItem('newsData');
//       if (cachedNewsData) {
//         const parsedCachedNewsData = JSON.parse(cachedNewsData);
//         console.log("News Cached Data", parsedCachedNewsData);
//         setArticles(parsedCachedNewsData);
//         setLoading(false);
//       } else {
//         const docRef = getData();


  
//         // news_ref.on('value', (snapshot) => {
//         //   const NewsData = snapshot.val();
//         //   const parsedNewsData = NewsData ? Object.values(NewsData) : [];
//         //   console.log("News Data", NewsData);
//         //   setArticles(parsedNewsData);
//         //   setLoading(false);
  
//         //   // Store data in cache
//         //   sessionStorage.setItem('newsData', JSON.stringify(parsedNewsData));
//         // });
//       }
//     } catch (error) {
//       console.error('Error fetching air quality data from Firebase:', error);
//       setLoading(false);
//     }

  

  // const fetchNewsArticles =  () => {
  //   // try {
  //   //   const data = await getNewsArticles();
  //   //   setArticles(data.articles);
  //   //   setLoading(false);
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
    
  return (
    <div>
      {loading ? <p>Loading...</p> : <ArticleList articles={articles} />}
    </div>
  );
};

export default PersonalizedFeed;
