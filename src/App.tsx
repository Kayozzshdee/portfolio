// App.tsx
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="bg-[#0e141e] min-h-screen selection:bg-blue-500/30">
      <Nav />
      <Home />
      <About />
      <Contact />
    </main>
  );
}