import { useState } from "react";
import "../styles/Navbar.css";

const navItems = [
  { label: "SOLUTIONS", dropdown: true },
  { label: "RESOURCES", dropdown: true },
  { label: "ABOUT US", dropdown: false },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (label) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <nav className="nav-bar">
      <div className="nav-inner">

        {/* Logo — grid col 1 */}
        <a href="#" className="nav-logo">N7</a>

        {/* Center links — grid col 2 */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label} className="nav-item">
              <button
                className="nav-link-btn"
                onClick={() => item.dropdown && toggle(item.label)}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    className={`nav-chevron ${openMenu === item.label ? "open" : ""}`}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              {item.dropdown && openMenu === item.label && (
                <div className="nav-dropdown">
                  <a href="#" className="nav-dropdown-item">Option 1</a>
                  <a href="#" className="nav-dropdown-item">Option 2</a>
                  <a href="#" className="nav-dropdown-item">Option 3</a>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA — grid col 3 */}
        <div className="nav-cta-wrap">
          <button className="nav-cta">REQUEST DEMO</button>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${mobileOpen ? "open" : ""}`} />
          <span className={`ham-line ${mobileOpen ? "open" : ""}`} />
          <span className={`ham-line ${mobileOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <div key={item.label} className="nav-mobile-item">
              <button
                className="nav-mobile-btn"
                onClick={() => item.dropdown && toggle(item.label)}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    className={`nav-chevron ${openMenu === item.label ? "open" : ""}`}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              {item.dropdown && openMenu === item.label && (
                <div className="nav-mobile-dropdown">
                  <a href="#" className="nav-dropdown-item">Option 1</a>
                  <a href="#" className="nav-dropdown-item">Option 2</a>
                  <a href="#" className="nav-dropdown-item">Option 3</a>
                </div>
              )}
            </div>
          ))}
          <button className="nav-cta nav-cta-mobile">REQUEST DEMO</button>
        </div>
      )}
    </nav>
  );
}