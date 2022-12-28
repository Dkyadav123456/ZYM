import React from 'react'
import '../CSS/Home.css'
import logo from '../Images/zymbg.jpg'
export default function Home() {
  return (
    <div className='container'>
      <div className='imageContainer'>
        <img src={logo} alt='logo'/>
        <div className='btn1'>
          <button>Subscribe</button>
        </div>
      </div>
      
    </div>
  )
}
