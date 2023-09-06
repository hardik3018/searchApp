import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchBar } from "./searchBar";
import { SearchResultsList } from "./searchResultList.jsx";

export const MyApp = () =>  {
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
  );
}

