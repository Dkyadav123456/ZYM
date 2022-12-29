import React from 'react'
import '../CSS/About.css'
import abimg from '../Images/logo2.jpg'
export default function About() {
  return (
    <section className="about container" id="about">
      <div className="about-wrapper">
        <img className="about-image" src={abimg} alt="" />
        <div className="about-data">
          <h3 className="about-title">STORY ABOUT US</h3>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            suscipit. Voluptates consectetur quod tempora id, ipsa aliquid.
            Facilis dolores aspernatur cum, neque, blanditiis quis enim odit
            voluptatum consequatur possimus corporis architecto nostrum!
            Praesentium saepe facere alias fugiat explicabo vel neque, enim
            dolore, id veniam porro veritatis. Rerum error itaque eligendi
          </p>
          <a href="#read-more" className="about-btn">READ MORE</a>
        </div>
      </div>
    </section>
  )
}
