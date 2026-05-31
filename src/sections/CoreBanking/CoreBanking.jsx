import React from 'react';
import '../../styles/CoreBanking.css';
import dashboardImg from '../../assets/dashboard.png';

function CoreBanking() {
  return (
    <section className="cb">
      {/* ── Dark background ── */}
      <div className="cb__bg" />

      {/* ── Faint "7" watermark ── */}
      <div className="cb__watermark" aria-hidden="true">7</div>

      {/* ── Left: text ── */}
      <div className="cb__left">
        <h1 className="cb__heading">
          A complete cloud-based<br />core banking.
        </h1>
        <p className="cb__sub">
          Faster time to market with our cloud-based<br />core banking services
        </p>
        <button className="cb__cta">REQUEST DEMO</button>
        <a href="#" className="cb__learn">LEARN MORE →</a>
      </div>

      {/* ── Right: device mockup */}
      <div className="cb__right">
        <div >
          {/* Top bezel / screen */}
          <div >
            <img
              src={dashboardImg}
              alt="AML Dashboard"
              
            />
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

export default CoreBanking;