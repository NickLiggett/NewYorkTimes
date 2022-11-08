import "./ArticleDetails.css";

const ArticleDetails = ({ selectedArticle, setSelected }) => {
  const { title, byline, abstract, published_date, updated_date, url } =
    selectedArticle;
  return (
    <div className="article-details">
      <h1>{title}</h1>
      <h2>{byline}</h2>
      <p>{abstract}</p>
      <div className="link-statement">
        <a href={url}>Check out the full article here.</a>
      </div>
      <p>Published: {published_date}</p>
      <p>Last Updated: {updated_date}</p>
      <button onClick={() => setSelected(null)}>Home</button>
    </div>
  );
};

export default ArticleDetails;
