import React from 'react'
import '../CSS/About.css'
import abimg from '../Images/logo2.jpg'
export default function About() {
  return (
    <section className="about container" id="about">
      <div className="about-wrapper">
        <img className="about-image" src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
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
