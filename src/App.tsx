import Header from "./components/Header";
import About from "./components/about";
import Developments from "./components/developments";
import Footer from "./components/footer";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const devRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header 
        onScrollToAbout={() => scrollToSection(aboutRef)} 
        onScrollToDev={() => scrollToSection(devRef)} 
      />
      
      <About sectionRef={aboutRef} />
      <Developments sectionRef={devRef} />
      <Footer />
    </>
  );
}

export default App;