import React from 'react';
import '../../styles/CoreBankingFeatures.css';
import kycDashboard from '../../assets/dashboard2.png';

const CheckIcon = () => (
  <svg className="cbf__check-icon" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="11" fill="#1a6ef5" />
    <path d="M6 11.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const leftFeatures = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

const rightFeatures = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

function CoreBankingFeatures() {
  return (
    <section className="cbf">
      {/* ── Left: device mockup bleeding off left edge ── */}
      <div >
        <div >
          <div >
            <img src={kycDashboard} alt="KYC Dashboard" className="cbf__screen-img" />
          </div>
          
        </div>
      </div>

      {/* ── Right: text content ── */}
      <div className="cbf__content">
        <h2 className="cbf__heading">
          Run a more efficient, flexible,&nbsp;and digitally<br />
          connected corebanking system
        </h2>

        <p className="cbf__label">What you will get:</p>

        <div className="cbf__features-grid">
          {/* Left column */}
          <ul className="cbf__list">
            {leftFeatures.map((f, i) => (
              <li key={i} className="cbf__item">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Right column */}
          <ul className="cbf__list">
            {rightFeatures.map((f, i) => (
              <li key={i} className="cbf__item">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CoreBankingFeatures;