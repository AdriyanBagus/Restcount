import React from 'react';
import './style.css';

const Counting = () => {
  return (
    <div className="counting-container">
      <h2 className="title">Laporan Harian</h2>
      <div className="box-container">
        <div className="count-box">
          <h3>Mobil</h3>
          <p>0</p> 
        </div>
        <div className="count-box">
          <h3>Bus</h3>
          <p>0</p> 
        </div>
        <div className="count-box">
          <h3>Truk</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Counting;
