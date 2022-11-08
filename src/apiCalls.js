export const fetchArticles = (subject) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${subject}.json?api-key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};