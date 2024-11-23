import axios from 'axios';
import React, { useContext, useState, useEffect} from 'react';
import { UserContext } from '../../UserContext';
import { useLocation } from 'react-router-dom';
import './Auth.scss';

const Login = () => {
    const {user, setUser}  = useContext(UserContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    let { state } = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://healthgen-api-wt86.onrender.com/api/auth/login', {
          email,
          password
        }).then(res => {
          setUser(res.data);
        }).then(() => window.history.back()).catch(error => {
          setError(error);
          console.log(error)
        })
    }
        
    useEffect(() => {
        user && window.history.back()
        error && setTimeout(() => {setError(null)}, 3000)
      }, [error, user])
      
    return (
        <div className='login'>
            <form action="">
                <h1>Welcome Back</h1>
                <h2>Sign In </h2>
                <h2>With Your Username Or Email</h2>
                <input type="email" onChange={e => setEmail(e.target.value)} pattern='/^[^\s@]+@[^\s@]+\.[^\s@]+$/' placeholder='example@gmail.com' required/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="" id="" placeholder='password' required/>
                <button type="submit" onClick={handleLogin} title="login">LOGIN</button>
                {
                    error && <span className="error text-danger">{error.message}</span>
                }
            </form>
        </div>
    );
}

export default Login; 
