import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="portfolioWrapperMain" id="home">
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
