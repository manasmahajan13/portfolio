import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="portfolioWrapperMain">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
