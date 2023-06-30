import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Footer/Contact";
import MarketDetails from "./Components/MarketDetails";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <MarketDetails />
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
