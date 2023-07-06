import React from 'react'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="container">
        <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com/ancientpupy" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
        <a href="https://www.instagram.com/ancientpupy/" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
        <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
        <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
      </div>
      <a href="#subscribe" title="subscribe"><button className='button-primary' type='button' title='subscribe'> subscribe</button></a>
    </div>
  )
}
