import React from 'react';
import './Preloader.css';

const Preloader = ({ hidePreloader }) => {
  return (
    <div className="preloader d-flex justify-content-center align-items-center">
      <h1 className="loading-text">LOADING</h1>
      <button className="btn-hide mt-3" onClick={hidePreloader}>
        Hide Preloader
      </button>
    </div>
  );
};

export default Preloader;
