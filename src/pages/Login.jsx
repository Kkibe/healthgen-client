import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';

const Login = () => {
    const {isFetching, error, currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {
          username, 
          password
        })
    }
    useEffect(() => {
        currentUser && window.history.back()
    },[])
    return (
        <div className='login'>
            <form action="">
                <h2>Welcome Back</h2>
                <input type="text" onChange={e => setUsername(e.target.value)} placeholder='username or email' required/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="" id="" placeholder='password' required/>
                <button type="submit" onClick={handleLogin} title="login">LOGIN</button>
                {
                    error && <span className="error text-danger">Something went wrong</span>
                }
            </form>
        </div>
    );
}

export default Login; 
