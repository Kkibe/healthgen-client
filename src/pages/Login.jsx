import axios from 'axios';
import React, { useContext, useState, useEffect} from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {user, setUser}  = useContext(UserContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://healthgen-api.onrender.com/api/auth/login', {
          username,
          password
        }).then(res => {
          JSON.parse( window.localStorage.setItem('healthgen-user', JSON.stringify(res.data)))
          navigate('/write');
        }).catch(error => {
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
                <h2>Welcome Back</h2>
                <input type="text" onChange={e => setUsername(e.target.value)} placeholder='username or email' required/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="" id="" placeholder='password' required/>
                <button type="submit" onClick={handleLogin} title="login">LOGIN</button>
                {
                    error && <span className="error text-danger">{error.response.data}</span>
                }
            </form>
        </div>
    );
}

export default Login; 
