import { Container, Row , Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export const SearchResultsList = ({ results }) => {
  console.log("rendering list");
  return (
    <div className="results-list  mx-auto m-5 shadow p-3 w-50 rounded">
    <Container>
      <Row>
          <Col><b>Year</b></Col>
          <Col><b>State</b></Col>
          <Col><b>Population</b></Col>
        
      </Row>
    </Container>
    <br/>
      {results.map((result, id) => ( 
        <div key={result["ID State"] + result["ID Year"]}
      className="search-result"
    >

    <Container>
      <Row key={result["ID State"] + result["ID Year"]}>
          <Col>{result.Year}</Col>
          <Col>{result.State}</Col>
          <Col>{result.Population}</Col>
        
      </Row>
    </Container>
      
    </div>
      ))}
    </div>
  );
};