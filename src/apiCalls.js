export const fetchArticles = (subject) => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${subject}.json?api-key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong.")
    } else {
      return response.json()
    }
  });
};