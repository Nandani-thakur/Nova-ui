import "../../styles/Footer.css";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const n7Banking = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = ["LinkedIn", "X"];

function NavList({ items }) {
  return (
    <ul className="ft-nav-list">
      {items.map((item) => (
        <li key={item} className="ft-nav-item">
          <a href="#" className="ft-nav-link">
            <span>{item}</span>
            <span className="ft-arrow">→</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-inner">

        {/* ── TOP SECTION ── */}
        <div className="ft-top">
          {/* Logo */}
          <div className="ft-logo-wrap">
            <span className="ft-logo">N7</span>
          </div>

          {/* Offices */}
          <div className="ft-offices">
            <div className="ft-office">
              <h4 className="ft-office-city">London</h4>
              <p className="ft-office-addr">
                Linktia Infosystems Ltd – CB7,<br />
                26 Main Road Sundridge, TN14 6EP,<br />
                England, United Kingdom.
              </p>
            </div>
            <div className="ft-office">
              <h4 className="ft-office-city">Dubai</h4>
              <p className="ft-office-addr">
                Linktia Infosystems Ltd –<br />
                CB7, Jumeirah Business, Center 5<br />
                Cluster W, Jumeirah Lakes Towers,<br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div className="ft-office">
              <h4 className="ft-office-city">London</h4>
              <p className="ft-office-addr">
                Linktia Infosystems Ltd –<br />
                CB7, Nirmal, Anand Nagar,<br />
                Suncity Road, Pune,<br />
                Maharashtra, 411041, India
              </p>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="ft-divider" />

        {/* ── BOTTOM SECTION ── */}
        <div className="ft-bottom">
          {/* Spacer matching logo width */}
          <div className="ft-logo-spacer" />

          {/* Nav columns */}
          <div className="ft-nav-cols">
            <div className="ft-nav-col">
              <h4 className="ft-col-heading">Solutions</h4>
              <NavList items={solutions} />
            </div>
            <div className="ft-nav-col">
              <h4 className="ft-col-heading">N7 Banking</h4>
              <NavList items={n7Banking} />
            </div>
            <div className="ft-nav-col">
              <h4 className="ft-col-heading">Our Socials</h4>
              <NavList items={socials} />
            </div>
          </div>
        </div>

        {/* ── COPYRIGHT ── */}
        <div className="ft-copyright">
          <p>
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies
            Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>

      </div>
    </footer>
  );
}