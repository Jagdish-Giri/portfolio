import React, { useEffect, useState } from 'react'
import './Preloader.css'

const Preloader = () => {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, []);

  return (
    <>
    {loading && (
        <div className='preloader'>
            <div className="loader">
                <div className="circleG">G</div>
                <p className="preloader-text">Girish</p>
            </div>
        </div>
    )}
    </>
  );
};

export default Preloader