import "../styles/Card.css";

export default function CTABanner() {
  return (
    <section className="cta-section">

      {/* N7 background outline image — right side */}
      <img src="/n7-bg.png" alt="" className="cta-n7-bg" aria-hidden="true" />

      {/* Blue geometric lines SVG overlay (the angular connector lines visible in the design) */}
      <svg className="cta-lines-svg" viewBox="0 0 700 300" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* Vertical divider line 1 */}
        <line x1="440" y1="0" x2="440" y2="300" stroke="#1a3a6e" strokeWidth="0.8" opacity="0.6"/>
        {/* Vertical divider line 2 */}
        <line x1="580" y1="0" x2="580" y2="300" stroke="#1a3a6e" strokeWidth="0.8" opacity="0.6"/>

        {/* Angular bracket top-left of center panel */}
        <polyline points="440,0 440,40 480,40" stroke="#2a5aaa" strokeWidth="0.8" fill="none" opacity="0.7"/>
        {/* Angular bracket top-right of center panel */}
        <polyline points="580,0 580,30 620,30" stroke="#2a5aaa" strokeWidth="0.8" fill="none" opacity="0.5"/>

        {/* Diagonal lines in center column */}
        <line x1="450" y1="60" x2="570" y2="200" stroke="#1e3d7a" strokeWidth="0.8" opacity="0.5"/>
        <line x1="470" y1="40" x2="570" y2="160" stroke="#1e3d7a" strokeWidth="0.6" opacity="0.35"/>

        {/* Small rectangle bracket top-right column */}
        <rect x="582" y="2" width="80" height="38" stroke="#2a5aaa" strokeWidth="0.7" fill="none" opacity="0.5"/>

        {/* Diagonal lines in right column */}
        <line x1="590" y1="60" x2="695" y2="220" stroke="#1e3d7a" strokeWidth="0.8" opacity="0.45"/>
        <line x1="610" y1="50" x2="695" y2="185" stroke="#1e3d7a" strokeWidth="0.5" opacity="0.3"/>
      </svg>

      {/* Left text content */}
      <div className="cta-left">
        <h2 className="cta-heading">
          Take the full advantage of<br />going paper-less now.
        </h2>
        <p className="cta-sub">
          N7 helps your financial institution improve the client experience,<br />
          automate and optimize procedures, simplify banking operations
        </p>
      </div>

      {/* Right buttons */}
      <div className="cta-buttons">
        <button className="cta-btn-outline">CONTACT US</button>
        <button className="cta-btn-solid">REQUEST DEMO</button>
      </div>

    </section>
  );
}