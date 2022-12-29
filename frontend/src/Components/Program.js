import React from 'react'
import '../CSS/Program.css'
import zymp from '../Images/zymbg.jpg'
export default function Program() {
  return (
    <section className="program container" id="program">
        <h1 className="section-title">OUR PROGRAM</h1>
        <h3 className="section-subtitle">build your best body</h3>
        <div className="row program-row">
          <div className="col program-card">
            <img
              className="program-card-image"
              src={zymp}
              alt=""
            />
            <h4 className="card-title">Cardio & Strength</h4>
            <p className="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
            <button className='join-btn'>join</button>
          </div>
          <div className="col program-card">
            <img
              className="program-card-image"
              src={zymp}
              alt=""
            />
            <h4 className="card-title">Muscle Building</h4>
            <p className="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
            <button className='join-btn'>join</button>
          </div>
          <div className="col program-card">
            <img
              className="program-card-image"
              src={zymp}
              alt=""
            />
            <h4 className="card-title">Stretch & Yoga</h4>
            <p className="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
            <button className='join-btn'>join</button>
          </div>
        </div>
      </section>
  )
}
