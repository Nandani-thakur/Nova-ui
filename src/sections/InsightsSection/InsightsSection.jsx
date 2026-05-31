import "../../styles/InsightsSection.css";
import LOGO from "../../assets/Frame54.png"
const articles = [
  {
    id: 1,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: true,
  },
  {
    id: 2,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: false,
  },
  {
    id: 3,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    featured: false,
  },
];



function FeaturedCard({ article }) {
  return (
    <div className="featured-card">
      <div className="featured-image-wrapper">
        <img src={LOGO} />
      </div>
      <div className="featured-content">
        <span className="category">{article.category}</span>
        <h2 className="featured-title">{article.title}</h2>
        <div className="meta">
          <span className="author">{article.author}</span>
          <span className="date">{article.date}</span>
        </div>
        <button className="read-more-btn">READ MORE</button>
      </div>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <span className="category">{article.category}</span>
      <h3 className="article-title">{article.title}</h3>
      <div className="meta">
        <span className="author">{article.author}</span>
        <span className="date">{article.date}</span>
      </div>
      <button className="read-more-btn">READ MORE</button>
    </div>
  );
}

export default function InsightsSection() {
  return (
    <section className="insights-section">
      <div className="left-col">
        <h1 className="headline">
          Get yourself up-to-speed on all the things happening in fintech
        </h1>
        <button className="insights-btn">INSIGHTS</button>
      </div>

      <div className="right-col">
        <FeaturedCard article={articles[0]} />

        <div className="card-grid">
          {articles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="all-insights">
          <a href="#" className="all-insights-link">
            READ ALL INSIGHTS →
          </a>
        </div>
      </div>
    </section>
  );
}