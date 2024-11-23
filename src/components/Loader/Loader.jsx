import React from 'react';
import './Loader.scss';

export default function Loader() {
  return (
    <div className='loader'>
        <div className="cover"></div>
        <div className="info">
            <div className="square"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
  );
}