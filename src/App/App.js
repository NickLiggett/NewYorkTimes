import "./App.css";
import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import NavBar from "../NavBar/NavBar";
import { fetchArticles } from "../apiCalls";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelected] = useState(null);
  const [selectedSubject, setSubject] = useState("home");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchArticles(selectedSubject).then((data) => {
      let theArticles = data.results.filter((element) => element.title);
      setArticles(theArticles);
    }).then(() => setLoading(false));
  }, [selectedSubject]);

  const articleList = articles.map((article) => {
    return (
      <ArticleCard
        key={article.title}
        article={article}
        setSelected={setSelected}
      />
    );
  });

  return (
    <div className="App">
      <NavBar
        setSubject={setSubject}
        selectedSubject={selectedSubject}
        setSelected={setSelected}
      />
      {(!loading) ? (!selectedArticle ? (
        <div className="article-list">{articleList}</div>
      ) : (
        <ArticleDetails
          selectedArticle={selectedArticle}
          setSelected={setSelected}
        />)
      ) : <h1 className="loading-message">Loading...</h1>}
    </div>
  );
}

export default App;
