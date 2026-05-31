import { useState } from "react";
import "../../styles/CaseStudies.css";
import LOGO from "../../assets/Frame54.png"

const cases = [
  {
    id: 1,
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    client: "Zoomerr",
  },
  {
    id: 2,
    category: "GROWTH",
    title: "How we scaled fintech startup to 1M users",
    client: "Zoomerr",
  },
  {
    id: 3,
    category: "STRATEGY",
    title: "Building trust in digital banking ecosystems",
    client: "Zoomerr",
  },
  {
    id: 4,
    category: "GETTING STARTED",
    title: "Launching a neobank in emerging markets",
    client: "Zoomerr",
  },
];


function ClientIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#2a2a2a"/>
      <path d="M14 7 L14 21 M8 10 L14 7 L20 10 M8 18 L14 21 L20 18" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(1);

  const current = cases.find((c) => c.id === active);
  const prev = () => setActive((a) => (a === 1 ? cases.length : a - 1));
  const next = () => setActive((a) => (a === cases.length ? 1 : a + 1));

  return (
    <section className="cs-section">
      <h2 className="cs-heading">Our Case Studies</h2>

      <div className="cs-stage">
        {/* Ghost card left */}
        <div className="cs-ghost cs-ghost-left">
        
          <img src={LOGO} alt="" />
        </div>

        {/* Main card */}
        <div className="cs-main-card">
          <div className="cs-image-panel">
          
            <img src={LOGO} alt="" />
          </div>
          <div className="cs-content-panel">
            <span className="cs-category">{current.category}</span>
            <h3 className="cs-title">{current.title}</h3>
            <div className="cs-client">
              <ClientIcon />
              <span className="cs-client-name">{current.client}</span>
            </div>
            <button className="cs-read-btn">READ MORE</button>
          </div>
          
          <div className="cs-ghost-letter">h</div>
        </div>

  
        <div className="cs-ghost cs-ghost-right">
          
        </div>
      </div>

      {/* Controls row */}
      <div className="cs-controls">
        <div className="cs-nav">
          <button className="cs-arrow-btn" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="cs-dots">
            {cases.map((c) => (
              <button
                key={c.id}
                className={`cs-dot ${c.id === active ? "cs-dot-active" : ""}`}
                onClick={() => setActive(c.id)}
                aria-label={`Slide ${c.id}`}
              />
            ))}
          </div>

          <button className="cs-arrow-btn" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <a href="#" className="cs-view-all">VIEW ALL →</a>
      </div>
    </section>
  );
}