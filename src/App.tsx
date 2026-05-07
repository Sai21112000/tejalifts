import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import WhoFor from './components/WhoFor';
import RealWorldProof from './components/RealWorldProof';
import Results from './components/Results';
import Approach from './components/Approach';
import Artifacts from './components/Artifacts';
import Testimonials from './components/Testimonials';
import FreeGuide from './components/FreeGuide';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { siteContent } from './content/siteContent';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Navbar {...siteContent.nav} />
      <main>
        <Hero {...siteContent.hero} />
        <Story {...siteContent.story} />
        <Services {...siteContent.services} />
        <WhoFor {...siteContent.whoFor} />
        <RealWorldProof {...siteContent.proof} />
        <Results {...siteContent.results} />
        <Approach {...siteContent.approach} />
        <Artifacts {...siteContent.artifacts} />
        <Testimonials {...siteContent.testimonials} />
        <FreeGuide {...siteContent.freeGuide} />
        <FAQ {...siteContent.faq} />
        <Contact {...siteContent.contact} />
      </main>
      <Footer {...siteContent.footer} />
    </div>
  );
}

export default App;
