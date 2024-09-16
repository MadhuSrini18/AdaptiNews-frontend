import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import { getNewsArticles } from './api';

import {db} from './firebase'
import { doc, collection, getDocs } from 'firebase/firestore';

import artdata from "./data/bloomberg_quint_news.json"

// export const getNewsArticles = async () => {
  
// };

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () =>{
    // const docRef =  await getDocs(collection(db, "documents"))
    // let docsArray = []; // Initialize an empty array

    // docRef.forEach((doc) => {
    //   // console.log(doc.id, " => ", doc.data());
    //   docsArray.push(doc.data()); // Append document data along with its id to the array
    // });
    // setArticles(docsArray)
    // setLoading(false)

    try {
      // const response = await fetch('../data/bloomberg_quint_news.json'); // Replace 'your_local_json_file.json' with the path to your local JSON file
      // if (!response.ok) {
      //   throw new Error(`Failed to fetch data from the local JSON file: ${response.status}`);
      // }
      // const data = await response.json();
      setArticles(artdata);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data from the local JSON file:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    try {
      setLoading(true);
      console.log("getting news data")
      // Check if data exists in cache
      const cachedNewsData = sessionStorage.getItem('newsData');
      if (cachedNewsData) {
        const parsedCachedNewsData = JSON.parse(cachedNewsData);
        console.log("News Cached Data", parsedCachedNewsData);
        setArticles(parsedCachedNewsData);
        setLoading(false);
      } else {
        const docRef = getData();


  
        // news_ref.on('value', (snapshot) => {
        //   const NewsData = snapshot.val();
        //   const parsedNewsData = NewsData ? Object.values(NewsData) : [];
        //   console.log("News Data", NewsData);
        //   setArticles(parsedNewsData);
        //   setLoading(false);
  
        //   // Store data in cache
        //   sessionStorage.setItem('newsData', JSON.stringify(parsedNewsData));
        // });
      }
    } catch (error) {
      console.error('Error fetching air quality data from Firebase:', error);
      setLoading(false);
    }
    
  }, []);

  

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

export default ArticleListPage;
