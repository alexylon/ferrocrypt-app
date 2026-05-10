import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Modes from "./components/Modes";
import Cryptography from "./components/Cryptography";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Modes />
        <Cryptography />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
