import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Navbar />
          </a>
        </div>
      </nav>

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/:countryId"} element={<CountryDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
