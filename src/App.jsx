import Footer from './components/Fotter';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/why-us';
import Clients from './components/Clients';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="">
      <main>
        <Home />
        <About />
        <Services />
        <WhyUs />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;