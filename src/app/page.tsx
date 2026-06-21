import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Licenses from '../components/Licenses';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import RightNav from '../components/RightNav';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <RightNav />
      {/* 
        Tam ekran slayt yapısı: h-screen overflow-y-scroll snap-y snap-mandatory
        Buradaki her bir section 100vh boyutunda olmalı ve snap-center almalıdır. 
      */}
      <main id="main-scroll-container" className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section id="hero" className="h-screen w-full snap-center snap-always relative overflow-hidden">
          <Hero />
        </section>
        
        <section className="h-screen w-full snap-center snap-always bg-white relative overflow-hidden">
          <About />
        </section>

        <section className="h-screen w-full snap-center snap-always bg-slate-50 relative overflow-hidden">
          <Experience />
        </section>

        <section className="h-screen w-full snap-center snap-always bg-white relative overflow-hidden">
          <Projects />
        </section>

        <section className="h-screen w-full snap-center snap-always bg-slate-50 relative overflow-hidden">
          <Education />
        </section>

        <section className="h-screen w-full snap-center snap-always bg-white relative overflow-hidden">
          <Licenses />
        </section>

        <section className="h-screen w-full snap-center snap-always bg-slate-50 relative overflow-hidden">
          <Skills />
        </section>
        
        <section className="w-full snap-end bg-slate-900 relative">
          <Footer />
        </section>
      </main>
    </>
  );
}
