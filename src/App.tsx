import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Goals } from '@/components/sections/Goals';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { useReveal } from '@/hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#noi-dung">
        Tới nội dung chính
      </a>
      <Header />
      <main id="noi-dung">
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Skills />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
