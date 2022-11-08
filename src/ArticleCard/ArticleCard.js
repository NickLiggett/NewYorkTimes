import "./ArticleCard.css";

const ArticleCard = ({ setSelected, article }) => {
  return (
    <div
      className="article-card"
      onClick={() => setSelected(article)}
    >
      <h3 className="article-title">{article.title}</h3>
      <p className="article-byline">{article.byline}</p>
    </div>
  );
};

export default ArticleCard;
