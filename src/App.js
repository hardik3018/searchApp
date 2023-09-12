import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MyApp from "./components/myApp";
import NotFound from "./components/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/api/data/" element={<MyApp />} />
        <Route path="/api/data/:year/:stateString" element={<MyApp />} />
        <Route path="/404" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
