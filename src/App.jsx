import "./App.css";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 -z-10 h-full w-full items-center py-24  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <Navbar />
        <Hero />
        <Technologies/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
