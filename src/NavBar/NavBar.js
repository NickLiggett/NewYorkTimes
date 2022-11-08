import "./NavBar.css";

const subjects = [
  "arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t - magazine",
  "travel",
  "upshot",
  "us",
  "world",
];

const subjectList = subjects.map((sub) => {
  return <option key={sub}>{sub}</option>;
});

const NavBar = ({ setSubject, selectedSubject }) => {
  return (
    <nav>
      <select
        type="selector"
        value={selectedSubject}
        id="dropdown"
        onChange={(event) => setSubject(event.target.value)}
      >
        {subjectList}
      </select>
      <h1 className="header-title">
        The New York Times Article Redirect Service
      </h1>
    </nav>
  );
};

export default NavBar;
