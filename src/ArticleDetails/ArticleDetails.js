import "./ArticleDetails.css";

const ArticleDetails = ({ selectedArticle, setSelected }) => {
  const { title, byline, abstract, published_date, updated_date, url } =
    selectedArticle;

  const publishedDate = new Date(published_date).toString().slice(4, 15);
  const updatedDate = new Date(updated_date).toString().slice(4, 15);

  return (
    <div className="article-details">
      <h1 className="details-title">{title}</h1>
      <h2 className="byline">{byline}</h2>
      <p id="abstract">{abstract}</p>
      <div className="link-statement">
        <a href={url}>Check out the full article here.</a>
      </div>
      <div className="date-wrapper">
        <p className="date">Published: {publishedDate}</p>
        <p className="date">Last Updated: {updatedDate}</p>
      </div>
      <button onClick={() => setSelected(null)}>Home</button>
    </div>
  );
};

export default ArticleDetails;
