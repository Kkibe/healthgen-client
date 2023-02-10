import React from 'react';
const Flyer = () => {
    return (
        <div className='flyer'>
            <h2>Healthgen Github Repository</h2>
            <p>
               Visit our github repository <a href="https://github.com/K-kibet/healthgen" target="_blank" title="our github repo"> `Healthgen </a> and give a star.
            </p>
            <a href="https://github.com/K-kibet/healthgen" title='healthgen'><button type='button' title='learn more'>Learn More <i className="fa fa-angle-right"></i></button></a>
        </div>
    );
}
export default Flyer;