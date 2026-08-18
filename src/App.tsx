import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import SplitValueProps from "./components/SplitValueProps";
import InteractiveSection from "./components/InteractiveSection";
import Showcase from "./components/Showcase";
import TextMask from "./components/TextMask";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <SplitValueProps />
        <InteractiveSection />
        <Showcase />
        <TextMask />
        <About />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
