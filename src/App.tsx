import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { OurServices } from './sections/OurServices';
import { Experts } from './sections/Experts';
import { ServiceHighlights } from './components/services/ServiceHighlights';
import { Contact } from './sections/Contact';
import { LanguageProvider } from './providers/LanguageProvider';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <OurServices />
          <Experts />
          <ServiceHighlights />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}