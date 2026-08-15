import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <About />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
