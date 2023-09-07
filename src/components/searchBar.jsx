import { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

export const SearchBar = ({ setResults, data }) => {

  const navigate = useNavigate();
  const {year = 'ALL' , stateString = ''} = useParams();
  const [stateInput, setStateInput] = useState(stateString);
  const [yearFilter, setyearFilter] = useState(year);
  

  const years = [
    "2013", "2014" , "2015" , "2016" , "2017" , "2018", "2019" , "2020"
  ];

  useEffect(() => {
    // Your code here
    const fetchData = (value, yearFilter) => {
      console.log("year: ",yearFilter,"state string : ",value);
      fetch("https://datausa.io/api/data?drilldowns=State&measures=Population")
        .then((response) => response.json())
        .then((obj) => {
          // Inside this callback, obj.data is the fetched data
          const db = obj.data;
    
          const results = db.filter((d) => {
            const titleMatch =
              value && d.State && d.State.toLowerCase().includes(value.toLowerCase());
            const yearMatch = yearFilter === "All" || d.Year.match(yearFilter);
            return titleMatch && yearMatch;
          });
    
          // Set the results state variable here
          setResults(results);
    
          // You can log the data here to see the updated value
          console.log(results);
        });
      };
      console.log("fetching data on basis on search click");
    fetchData(stateString, year);
    // This code will run only when the dependency array changes that is when url navigation happens which happens when user click search button
  }, [stateString, year]);

  const handleChangeInput = (value) => {
    setStateInput(value);
    console.log(value);
  };

  const handleClickYear = (year) => {
    // setYear(year)
    setyearFilter(year === yearFilter ? "All" : year);
    console.log(year);
  };

  const handleClickSearch = () =>{
    const url = `/api/data/${yearFilter}/${stateInput}`;
    navigate(url);
  }
  
  return (
    <>
    <div className="input-wrapper mx-auto m-5 shadow p-3 w-50 inline rounded gap-2">
      
      
      <input
        className="w-75  shadow-sm border-0  p-2 rounded"
        placeholder="Type to search..."
        value={stateInput}
        onChange={(e) => handleChangeInput(e.target.value)}
      />
      <FaSearch id="search-icon" className="h-100 ml-2" 
       onClick={() => handleClickSearch()}
       />
      
    </div>

    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex ">
        {years.map((year) => (
          <Button className=" b m-4 shadow " variant="flat" size="xxl"
          
            key={year}
            onClick={() => handleClickYear(year)}
            style={{
              fontWeight: year === yearFilter ? "bold" : "normal",
              color: year === yearFilter ? "white" : "black",
              backgroundColor: year===yearFilter ? "black" : "white"
            }}
          >
            {year}
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
