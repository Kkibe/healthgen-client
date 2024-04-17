import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';

const Register = () => {
    const {user, setUser} = useContext(UserContext);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post("https://healthgen-api-wt86.onrender.com/api/auth/register", {
            username, 
            password,
            email
          }).then(res => {
            setUser(res.data);
          }).then(() => window.history.back()).catch(error => {
            setError(error);
          })
    }
    useEffect(() => {
        user && window.history.back()
        error && setTimeout(() => {setError(null)}, 3000)
    },[error, user])
    return (
        <div className='register'>
            <form action="">
                <h2>SIGN UP Free!</h2>
                <input type="email" onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
                <input type="text" onChange={e => setUsername(e.target.value)} placeholder='username' required/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="" id="" placeholder='password' required/>
                <button type="submit"  onClick={handleRegister} title="register">REGISTER</button>
                {
                    error && <span className="error text-danger">{error.response.data}</span>
                }
            </form>
        </div>
    );
}

export default Register; 
