import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#0e141e] w-full">
      <div>
        <Nav />
        <Home />
        <About />
        {/* <Contact/> */}
      </div>
    </div>
  );
}
