import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import FGreeting from "./components/pure/fGreeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name=" Lidia "></Greeting> */}
        <FGreeting name=" Lidia"></FGreeting>
      </header>
    </div>
  );
}

export default App;
