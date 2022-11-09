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

const NavBar = ({ setSubject, selectedSubject, setSelected }) => {
  const changeHandler = (event) => {
    event.preventDefault();
    setSubject(event.target.value);
    setTimeout(() => setSelected(null), 600)
  };

  return (
    <nav>
      <div className="filter-section">
        <p className="filter-message">Filter by section:</p>
        <select
          type="selector"
          value={selectedSubject}
          id="dropdown"
          onChange={(event) => changeHandler(event)}
        >
          {subjectList}
        </select>
      </div>
      <h1 className="header-title">
        The New York Times Article Redirect Service
      </h1>
    </nav>
  );
};

export default NavBar;
