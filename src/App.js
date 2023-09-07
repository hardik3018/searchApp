import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyApp from "./components/myApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/api/data/"
          element={<MyApp />}
        />
        <Route
          path="/api/data/:year/:stateString"
          element={<MyApp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
