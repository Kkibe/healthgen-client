import React, { useState, useEffect, useContext } from 'react';
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Posts from './pages/Posts';
import Write from './pages/Write';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleBook from './pages/SingleBook';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import UploadBook from './pages/UploadBook';
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
          <Route path='/upload' element={<UploadBook/>} />
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
