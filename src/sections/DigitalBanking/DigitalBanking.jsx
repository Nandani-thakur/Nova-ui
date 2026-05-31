
import React from 'react';
import '../../styles/DigitalBanking.css';

import Card from '../../Component/Card.jsx'
// Images
import iPhone1 from '../../assets/iPhone_13.png';
import iPhone2 from '../../assets/iPhone_131.png';
import iPhone3 from '../../assets/iPhone_132.png';
import N7Img from '../../assets/N7.png';
import Img from '../../assets/7.png';
import VectorImg from '../../assets/Vector.png';


const CheckIcon = () => (
  <svg className="db__check" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#1a6ef5" />
    <path d="M6 11.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function DigitalBanking() {
  return (
    <div className="db">

     
      <section className="db__s1">
        {/* N7 watermark — absolute, sits BEHIND phone in center */}
        <img src={N7Img} alt="" aria-hidden="true" className="db__s1__n7" />

        {/* COL 1: Hero text */}
        <div className="db__s1__text">
          <h1 className="db__hero-h">Digital banking<br />out-of-the-box</h1>
          <p className="db__hero-p">N7 helps your financial institution improve the client experience, automate and optimize procedures</p>
          <button className="db__btn">REQUEST DEMO</button>
          <a href="#" className="db__learn">LEARN MORE →</a>
        </div>

       
        <div className="db__s1__phone">
          <svg className="db__s1__bracket" viewBox="0 0 220 60" fill="none">
            <path d="M70 58 L70 10 L110 10" stroke="#a0b8cc" strokeWidth="1.5" fill="none"/>
            <path d="M150 58 L150 10 L110 10" stroke="#a0b8cc" strokeWidth="1.5" fill="none"/>
          </svg>
          <img src={iPhone1} alt="App screen 1" className="db__phone-img" />
        </div>

        {/* COL 3: Feature text */}
        <div className="db__s1__feat">
          <h3 className="db__feat-h">Fully compliant with regulatory requirement</h3>
          <p className="db__feat-p">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.</p>
          <ul className="db__list">
            <li><CheckIcon /><span>Pre-integrated Security System</span></li>
            <li><CheckIcon /><span>Fully Compliant With Regulatory Requirement</span></li>
            <li><CheckIcon /><span>Digitally Connected Core</span></li>
          </ul>
        </div>
      </section>

      
      <section className="db__s2">

        {/* COL 1: Vector image — alone, nothing on top */}
        <img src={VectorImg} alt="" aria-hidden="true" className="db__s2__vector" />

        {/* COL 2: Text + Phone side by side */}
        <div className="db__s2__right">
          <div className="db__s2__text">
            <h3 className="db__feat-h">No legacy IT systems</h3>
            <p className="db__feat-p">Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.</p>
            <ul className="db__list">
              <li><CheckIcon /><span>Adaptive &amp; Intelligent API monetization</span></li>
              <li><CheckIcon /><span>Ambient User Experience</span></li>
              <li><CheckIcon /><span>Cloud-native With lower TCO</span></li>
            </ul>
          </div>
          <div className="db__s2__phone">
            <img src={iPhone2} alt="App screen 2" className="db__phone-img" />
          </div>
        </div>

      </section>

      
      <section className="db__s3">
        {/* N7 watermark bottom right */}
        <img src={Img} alt="" aria-hidden="true" className="db__s3__n7" />

        {/* COL 1: Phone with bracket corner */}
        <div className="db__s3__phone">
          {/* top-right bracket box (like image) */}
          <div className="db__s3" />
          <img src={iPhone3} alt="App screen 3" className="db__phone-img" />
        </div>

        {/* COL 2: Feature text */}
        <div className="db__s3__feat">
          <h3 className="db__feat-h">No traditional branches</h3>
          <p className="db__feat-p">Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.</p>
          <ul className="db__list">
            <li><CheckIcon /><span>Branchless &amp; Paperless Banking</span></li>
            <li><CheckIcon /><span>Digital Transformation Capability</span></li>
            <li><CheckIcon /><span>Optimized, Adoptable and Scalable</span></li>
          </ul>
        </div>
        <Card/>
      </section>

    
    </div>
  );
}