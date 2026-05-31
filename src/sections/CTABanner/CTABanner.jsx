import "../../styles/CTABanner.css";

export default function CTABanner() {
  return (
    <section className="cta">
      <div className="cta-left">
        <h2 className="cta-heading">
          Take the full advantage of<br />going paper-less now.
        </h2>
        <p className="cta-sub">
          CB7 helps your financial institution improve the client experience,<br />
          automate and optimize procedures, simplify banking operations
        </p>
      </div>

      <div className="cta-buttons">
        <button className="cta-btn-outline">CONTACT US</button>
        <button className="cta-btn-solid">REQUEST DEMO</button>
      </div>
    </section>
  );
}