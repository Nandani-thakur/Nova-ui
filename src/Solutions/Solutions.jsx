

import React from 'react';
import '../../src/styles/Solutions.css';
import vector1 from '../assets/Vector1.png'
import vector2 from '../assets/Vector2.png'
import vector3 from '../assets/Vector3.png'
import vector4 from '../assets/Vector4.png'
import vector5 from '../assets/Vector5.png'



const solutions = [
  {
    id: 1,
    icon: <img src={vector1} alt='l'/>,
    title: 'Core Banking CB7',
    tag: null,
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    col: 'left',
  },
  {
    id: 2,
    icon: <img src={vector2} alt='l'/>,
    title: 'Digital Banking N7',
    tag: null,
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    col: 'right',
  },
  {
    id: 3,
    icon:<img src={vector3} alt='l'/>,
    title: 'Open Banking',
    tag: null,
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    col: 'left',
  },
  {
    id: 4,
    icon: <img src={vector5} alt='l'/>,
    title: 'Loan Origination System',
    tag: 'NBFC',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    col: 'right',
  },
  {
    id: 5,
    icon: <img src={vector4} alt='l'/>,
    title: 'Loan Management System',
    tag: 'NBFC',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    col: 'left',
  },
];

const SolutionCard = ({ icon, title, tag, description }) => (
  <div className="solution-card">
    <div className="solution-card__header">
      <div className="solution-card__icon">{icon}</div>
      {tag && <span className="solution-card__tag">{tag}</span>}
    </div>
    <h3 className="solution-card__title">{title}</h3>
    <p className="solution-card__description">{description}</p>
    <a href="#" className="solution-card__link">
      LEARN MORE <span className="solution-card__arrow">→</span>
    </a>
  </div>
);

function Solutions() {
  const leftCards = solutions.filter((s) => s.col === 'left');
  const rightCards = solutions.filter((s) => s.col === 'right');

  return (
    <div className="solutions">
      <div className="solutions__container">
        {/* Left hero section */}
        <div className="solutions__hero">
          <h1 className="solutions__heading">
            All of our solutions are<br />tailor-made to your needs
          </h1>
          <button className="solutions__cta">REQUEST DEMO</button>
        </div>

        {/* Right grid section */}
        <div className="solutions__grid">
          <div className="solutions__col">
            {leftCards.map((s) => (
              <SolutionCard key={s.id} {...s} />
            ))}
          </div>
          <div className="solutions__col">
            {rightCards.map((s) => (
              <SolutionCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;