import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import DataCards from "./Components/Cards/DataCards";
import Contact from "./Components/Footer/Contact";
// import Demo from "./Components/Demo";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <DataCards />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
