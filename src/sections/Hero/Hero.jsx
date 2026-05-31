import React from 'react'
import "../../styles/Hero.css"
import heroImage from '../../assets/Frame 114.png'
import logo1 from '../../assets/logo.png'
import logo2 from '../../assets/logo (1).png'
import logo3 from '../../assets/logo (2).png'
import logo4 from '../../assets/logo (3).png'
import logo5 from '../../assets/logo (4).png'
import logo6 from '../../assets/logo (5).png'

function Hero() {
  return (
    <section className="hero">
  <div className="hero-left">
     <div className="hero-text-wrapper">
    <div className='hero-content'>
    <h1>The new foundation of modern banking</h1>

    <p>
      We drive innovation and growth, provide seamless
      customer experience and operational excellence
    </p>
</div>
    <div className="hero-buttons">
      <button className="primary-btn">REQUEST DEMO</button>
      <button className="secondary-btn">CONTACT US</button>
    </div>
    </div>

    {/* <div className="trusted-by">
      <p>Trusted By:</p>
    </div> */}
    <div className="trusted-by">

  <p>Trusted By:</p>

  <div className="trusted-logos">
    <img src={logo1} alt="" />
    <img src={logo2} alt="" />
    <img src={logo3} alt="" />
    <img src={logo4} alt="" />
    <img src={logo5} alt="" />
    <img src={logo6} alt="" />
  </div>

</div>

  </div>

  <div className="hero-right">
    <img src={heroImage} alt="banking" />
  </div>
</section>
  )
}

export default Hero