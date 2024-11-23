import React from 'react'
import { NavLink } from 'react-router-dom';
import './Topbar.scss';

export default function Topbar() {
  const hashElement = document.querySelector("#subscribe")


  return (
    <div className='topbar'>
      <div className="container">
        <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook/kibetkorirc'><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com/nutricon_client" className='twitter' target='_blank' title='twitter/@nutricon_client'><i className="fa fa-twitter"></i></a>
        <a href="https://www.instagram.com/health.gen/" className='instagram' target='_blank' title='instagram/@health.gen'><i className="fa fa-instagram"></i></a>
        <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube/@codespear'><i className="fa fa-youtube"></i></a>
        <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
      </div>
      <a href='#subscribe' title="subscribe" className='btn'>SUBSCRIBE</a>
    </div>
  )
}
