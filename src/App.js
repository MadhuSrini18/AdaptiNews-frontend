import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import ArticleListPage from './ArticleListPage';
import Categories from './Categories';
import About from './About';
import Preferences from './Preferences';
import Login from './login';
import Logout from './logout';
import Signup from './signup';
import UserProfile from './UserProfile';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import PersonalizedFeed from './PresonalizedFeed';
import { UserProvider } from './userContext';


const App = () => {
  return (
    <Router>
      
      <AuthProvider> {/* Wrap the App component with AuthProvider */}
      <UserProvider>
      <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/categories" element={<Categories />}  />
            <Route path="/preferences" element={<Preferences />}  />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/about" element={<About />}/> 
            <Route path="/logout" element={<Logout />} /> 
            <Route path="/userprofile" element={<UserProfile />} /> 
            <Route path='/personalizedfeed' element={<PersonalizedFeed />}/>

          </Routes>
        </div>
      </UserProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
