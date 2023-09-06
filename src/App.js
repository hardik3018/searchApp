import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { SearchBar } from "./components/searchBar";
import { SearchResultsList } from "./components/searchResultList";
// import { MyApp } from "./components/myApp";

import { Routes, Route } from "react-router-dom";

function App() {
  const [results, setResults] = useState([]);
  // const [year, setYear] = useState();

  // const [state, setState] = useState();

  return (
    <div className="App mx-auto gap-3">
      <div className="search-bar-container">
        <SearchBar
          setResults={setResults}
          // setYear={setYear}
          // setState={setState}
        />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>

    // <Routes>
    //   <Route path="/" element={<MyApp />}></Route>
    //   <Route path="/path2" element={<MyApp />}></Route>

    //   <Route path="/path3" element={<MyApp />}></Route>
    //   {/* <Route path="/filtered-results/:state/:year" component={results} /> */}
    // </Routes>
  );
}

export default App;
