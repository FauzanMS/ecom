import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import b1 from './b1.png';
import b2 from './b2.jpg';
export default function HomePage() {

  return (
    <div id="front">
      <Navbar />
      <div className="backgroundForMob">
        <img src={b1} id="backForMob"/>
      </div>
      <div className="caro">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={p1} className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={p2} className="d-block" alt="..." />
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
      <Link to="/explore"><button type="button" className=" btn btn-oultine exploreBut">EXPLORE</button></Link>
    </div >
  )
}


