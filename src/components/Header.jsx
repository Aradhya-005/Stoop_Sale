import React from 'react'
import LottieFiles from './LottieFiles'
import EventDetails from './EventDetails'
import ProductList from './ProductList'
import '../style/Header.css';


function Header() {
  return (
   <>
   <div className="video-container">
   
      <video autoPlay muted loop>
        <source
          src={`${process.env.PUBLIC_URL}/assets/title-video.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="lottie-container">
          <LottieFiles />
        </div>
      <h2>Brooklyn Stoop Sale </h2>
     
    </div>
    
    <div className="content">
      <EventDetails />
      <ProductList/>
    </div>
   </>
  )
}

export default Header