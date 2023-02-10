import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Message, setMessage] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const scriptUrl = 'https://sheet.best/api/sheets/690abbb0-250b-4e15-a9dc-bcaebe7f36b7';
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(scriptUrl, {
            Name,
            Email,
            Phone,
            Message
        }).then((res) => {
            setSuccess(res)
        }).catch(err => {
            setError(err.message);
        })
        e.target.childNodes.forEach(tag => {
            if(tag.placeholder) {
                tag.value = ''
            }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            error && setError(null);
            success && setSuccess(null);
        }, 2000);
    }, [success, error]); 
    return (
        <div className='contact'>
            <form onSubmit={handleSubmit}>
                <h3>GET IN TOUCH</h3>
                <input type="text" id='name' placeholder='Your Name' onChange={(e) => setName(e.target.value)} required />
                <input type="email" id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                <input type='tel' id='phone' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)}/>
                <textarea  id="message" rows="4" placeholder='How can we help you?' onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit" title='submit'>Send</button>
                {
                    error && <p className='error'>{error}!</p>
                }
                {
                    success && <p className='success'>Your message was submitted successfully!</p>
                }
            </form>
        </div>
    );
}

export default Contact; 
