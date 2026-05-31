// import React from 'react';
// import '../../styles/DigitalBanking.css';


// // Images
// import iPhone1 from '../../assets/iPhone_13.png';
// import iPhone2 from '../../assets/iPhone_131.png';
// import iPhone3 from '../../assets/iPhone_132.png';
// import N7Img from '../../assets/N7.png';
// import VectorImg from '../../assets/Vector.png';
// import PaperlessCTA from '../PaperlessCTA/PaperlessCTA';

// const CheckIcon = () => (
//   <svg className="db__check-icon" viewBox="0 0 22 22" fill="none">
//     <circle cx="11" cy="11" r="11" fill="#1a6ef5" />
//     <path d="M6 11.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// // Decorative corner brackets (top-right of section 1 phone area)
// const BracketDecor = () => (
//   <svg className="db__bracket" viewBox="0 0 120 80" fill="none">
//     <path d="M40 4 H4 V40" stroke="#a0b4cc" strokeWidth="1.5" fill="none" />
//     <path d="M80 4 H116 V40" stroke="#a0b4cc" strokeWidth="1.5" fill="none" />
//   </svg>
// );

// function DigitalBanking() {
//   return (
//     <div className="db">

//       {/* ════════════════════════════════
//           SECTION 1 — Hero + Phone 1
//           ════════════════════════════════ */}
//       <section className="db__section db__section--1">
//         {/* Background Vector decoration left */}
//         <img src={VectorImg} alt="" className="db__vector db__vector--s1-left" aria-hidden="true" />
//         {/* Background N7 watermark right */}
//         <img src={N7Img} alt="" className="db__n7 db__n7--s1" aria-hidden="true" />

//         {/* Left: text */}
//         <div className="db__left db__left--hero">
//           <h1 className="db__hero-heading">
//             Digital banking<br />out-of-the-box
//           </h1>
//           <p className="db__hero-sub">
//             N7 helps your financial institution improve the client<br />
//             experience, automate and optimize procedures
//           </p>
//           <button className="db__cta-btn">REQUEST DEMO</button>
//           <a href="#" className="db__learn-link">LEARN MORE →</a>
//         </div>

//         {/* Center: Phone mockup */}
//         <div className="db__phone-wrap db__phone-wrap--center">
//           <BracketDecor />
//           <img src={iPhone1} alt="Banking App Screen 1" className="db__phone-img" />
//         </div>

//         {/* Right: Feature text */}
//         <div className="db__right db__right--s1">
//           <h3 className="db__feat-title">Fully compliant with regulatory<br />requirement</h3>
//           <p className="db__feat-desc">
//             The governance of risk management with regulations is achieved by our
//             risk management framework that is fully integrated to work with digital
//             bank's operational-risk protocols and procedures.
//           </p>
//           <ul className="db__feat-list">
//             <li className="db__feat-item"><CheckIcon /><span>Pre-integrated Security System</span></li>
//             <li className="db__feat-item"><CheckIcon /><span>Fully Compliant With Regulatory Requirement</span></li>
//             <li className="db__feat-item"><CheckIcon /><span>Digitally Connected Core</span></li>
//           </ul>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           SECTION 2 — Text left + Phone 2 right
//           ════════════════════════════════ */}
//       <section className="db__section db__section--2">
//         {/* Background Vector left */}
//         <img src={VectorImg} alt="" className="db__vector db__vector--s2-left" aria-hidden="true" />

//         {/* Left: Feature text */}
//         <div className="db__left db__left--s2">
//           <h3 className="db__feat-title">No legacy IT systems</h3>
//           <p className="db__feat-desc">
//             Our Digital Banking solution and multilayered approach help financial
//             institutions take advantage of digital transformation by ensuring customer
//             trust and regulatory compliance.
//           </p>
//           <ul className="db__feat-list">
//             <li className="db__feat-item"><CheckIcon /><span>Adaptive &amp; Intelligent API monetization</span></li>
//             <li className="db__feat-item"><CheckIcon /><span>Ambient User Experience</span></li>
//             <li className="db__feat-item"><CheckIcon /><span>Cloud-native With lower TCO</span></li>
//           </ul>
//         </div>

//         {/* Right: Phone mockup */}
//         <div className="db__phone-wrap db__phone-wrap--right">
//           {/* bracket top-left of phone */}
//           <div className="db__bracket-box db__bracket-box--tl" />
//           <div className="db__bracket-box db__bracket-box--br" />
//           <img src={iPhone2} alt="Banking App Screen 2" className="db__phone-img" />
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           SECTION 3 — Phone 3 center + Text right
//           ════════════════════════════════ */}
//       <section className="db__section db__section--3">
//         {/* Background N7 watermark right */}
//         <img src={N7Img} alt="" className="db__n7 db__n7--s3" aria-hidden="true" />
//         {/* Background Vector right */}
//         <img src={VectorImg} alt="" className="db__vector db__vector--s3-right" aria-hidden="true" />

//         {/* Center: Phone mockup */}
//         <div className="db__phone-wrap db__phone-wrap--center-s3">
//           <div className="db__bracket-box db__bracket-box--tl" />
//           <img src={iPhone3} alt="Banking App Screen 3" className="db__phone-img" />
//         </div>

//         {/* Right: Feature text */}
//         <div className="db__right db__right--s3">
//           <h3 className="db__feat-title">No traditional branches</h3>
//           <p className="db__feat-desc">
//             Our Digital Banking out-of-the-box helps you to accelerate innovation
//             while reducing risks and optimising operational costs for a seamless
//             branchless experience.
//           </p>
//           <ul className="db__feat-list">
//             <li className="db__feat-item"><CheckIcon /><span>Branchless &amp; Paperless Banking</span></li>
//             <li className="db__feat-item"><CheckIcon /><span>Digital Transformation Capability</span></li>
//             <li className="db__feat-item"><CheckIcon /><span>Optimized, Adoptable and Scalable</span></li>
//           </ul>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           SECTION 4 — Reuse PaperlessCTA
//           ════════════════════════════════ */}
//       <PaperlessCTA/>

//     </div>
//   );
// }

// export default DigitalBanking;
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