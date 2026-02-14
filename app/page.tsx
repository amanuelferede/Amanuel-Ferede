import AboutMe from "./components/aboutme";
import Banner from "./components/banner";
import Certificates from "./components/certificates";
import ContactMe from "./components/contact";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Works from "./components/works";


export default function Home() {
  return (
<>
      <Banner />
      <AboutMe />
      <Certificates />

      <Skills />
      <Works />
      <ContactMe />
      <Footer />
    </>

  );
}
