import React from 'react';
import '../../styles/PaperlessCTA.css';
import cb7Img from '../../assets/CB7.png';
import MarqueeTicker from '../../Component/MarqueeTicker';

function PaperlessCTA() {
  return (
    <div>
    <section className="pcta">

      {/* ── ONE big card with CB7 as background image + outer shadow ── */}
      <div className="pcta__card">

        {/* CB7 image sits inside the card as background */}
        <img src={cb7Img} alt="" aria-hidden="true" className="pcta__cb7" />

        {/* Vertical divider inside card */}
        <div className="pcta__divider" />

        {/* Left: text content — no shadow */}
        <div className="pcta__left">
          <h2 className="pcta__heading">
            Take the full advantage of<br />going paper-less now.
          </h2>
          <p className="pcta__sub">
            CB7 helps your financial institution improve the client experience,<br />
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right: buttons — no shadow */}
        <div className="pcta__right">
          <button className="pcta__btn pcta__btn--outline">CONTACT US</button>
          <button className="pcta__btn pcta__btn--solid">REQUEST DEMO</button>
        </div>

      </div>

    </section>
    <MarqueeTicker/>
    </div>
  );
}

export default PaperlessCTA;