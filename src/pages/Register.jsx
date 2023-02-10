import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';

const Register = () => {
    const {isFetching, error, currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch()
    
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        register(dispatch, {
          username, 
          password,
          email
        })
    }

    useEffect(() => {
        currentUser && window.history.back()
    },[])
    return (
        <div className='register'>
            <form action="">
                <h2>SIGN UP Free!</h2>
                <input type="email" onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
                <input type="text" onChange={e => setUsername(e.target.value)} placeholder='username' required/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="" id="" placeholder='password' required/>
                <button type="submit"  onClick={handleRegister} title="register">REGISTER</button>
                {
                    error && <span className="error text-danger">Something went wrong</span>
                }
            </form>
        </div>
    );
}

export default Register; 