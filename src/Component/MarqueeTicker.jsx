import React from 'react';
import '../styles/MarqueeTicker.css';

const items = [
  { type: 'star' },
  { type: 'text-blue', content: 'N7' },
  { type: 'star' },
  { type: 'text-dark', content: 'Say' },
  { type: 'emoji', content: '👋' },
  { type: 'text-dark', content: 'to the new way of banking' },
  { type: 'star' },
  { type: 'text-blue', content: 'CB7' },
  { type: 'star' },
  { type: 'text-dark', content: 'Say' },
  { type: 'emoji', content: '👋' },
  { type: 'text-dark', content: 'to the new way of banking' },
];

const StarIcon = () => (
  <svg className="ticker__star" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="#b0b8c8" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const TickerItem = ({ item }) => {
  switch (item.type) {
    case 'star':
      return <span className="ticker__item"><StarIcon /></span>;
    case 'text-blue':
      return <span className="ticker__item ticker__text ticker__text--blue">{item.content}</span>;
    case 'text-dark':
      return <span className="ticker__item ticker__text ticker__text--dark">{item.content}</span>;
    case 'emoji':
      return <span className="ticker__item ticker__emoji">{item.content}</span>;
    default:
      return null;
  }
};

function MarqueeTicker() {
  // Duplicate items for seamless infinite loop
  const allItems = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker__track">
        {allItems.map((item, i) => (
          <TickerItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MarqueeTicker;