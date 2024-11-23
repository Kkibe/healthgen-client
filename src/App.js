import React, { useState, useEffect, useContext } from 'react';
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/Dropdown/Dropdown';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Posts from './pages/Posts/Posts';
import Write from './pages/Write/Write';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SingleBook from './pages/Books/SingleBook';
import SinglePost from './pages/Posts/SinglePost';
import Profile from './pages/UserProfile/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import UploadBook from './pages/UploadBook/UploadBook';
import { UserContext } from './UserContext';
export default function App() {
  const [user, setUser] = useState(null);
  
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children
  };
  
  useEffect(() => {
    setUser(JSON.parse( window.localStorage.getItem('healthgen-user')));
  }, [])

  useEffect(() => {
    user && window.localStorage.setItem("healthgen-user", JSON.stringify(user));
    !user && window.localStorage.removeItem("healthgen-user");
  }, [user]);
  
  return (
    <UserContext.Provider value={{user, setUser}} >
      <div className='app'>
        <Topbar />
        <Navbar />
        <Dropdown />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/write' element={<ProtectedRoute><Write/></ProtectedRoute>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/posts/:id' element={<SinglePost />} />
          <Route path='/books/:id' element={<SingleBook />} />
          <Route path='/upload' element={<ProtectedRoute><UploadBook/></ProtectedRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/get-started' element={<Register/>} />
        </Routes>
        <Newsletter />
        <Footer  user={user}/>
      </div>
    </UserContext.Provider>
  )
}
