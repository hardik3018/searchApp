import { useState , useEffect} from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [yearFilter, setyearFilter] = useState("All");
  const [data , setData] = useState([]);
  const history = useHistory();

  const year = [
    "2013", "2014" , "2015" , "2016" , "2017" , "2018", "2019" , "2020"
  ];

  const fetchData = (value, yearFilter) => {

    
    fetch("https://datausa.io/api/data?drilldowns=State&measures=Population")
    .then(response => response.json())
    .then(
      (obj) => {
        setData(obj.data);
      }
    )
  
    console.log(data);

    var db = data;

    const results = db.filter((d) => {
      const titleMatch = value && d.State && d.State.toLowerCase().startsWith(value.toLowerCase());
      const yearMatch = (yearFilter==="All") || d.Year.match(yearFilter);
      return titleMatch && yearMatch;
    });

    
    setResults(results);

    
  };

  const handleChange = (value) => {
    setInput(value);
    // setState(value);
    fetchData(value, yearFilter);
  };

  const handleClick = (year) => {
    // setYear(year)
    setyearFilter(year === yearFilter ? "All" : year);
    fetchData(input, year === yearFilter ? "All" : year);
  };

  useEffect(() => {
    // Filter data based on stateFilter and yearFilter    

    history.push(`/filtered-results/${input}/${yearFilter}`);
  }, [data, input, yearFilter, history]);


  return (
    <>
    <div className="input-wrapper mx-auto m-5 shadow p-3 w-50 inline rounded gap-2">
      
      
      <input
        className="w-75  shadow-sm border-0  p-2 rounded"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id="search-icon" className="h-100 ml-2" 
       onClick={() => handleChange(input)}
       />
      
    </div>

    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex ">
        {year.map((g) => (
          <Button className=" b m-4 shadow " variant="flat" size="xxl"
          
            key={g}
            onClick={() => handleClick(g)}
            style={{
              fontWeight: g === yearFilter ? "bold" : "normal",
              color: g === yearFilter ? "white" : "black",
              backgroundColor: g===yearFilter ? "black" : "white"
            }}
          >
            {g}
          </Button>
        ))}
        </div>
        <div className="mx-auto mt-5">
          <p >Selected year: {yearFilter}</p>
        </div>
        
      </div>

    </>
  );
};
