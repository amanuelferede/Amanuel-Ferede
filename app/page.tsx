import AboutUs from "./components/aboutus";
import Banner from "./components/banner";
import ContactMe from "./components/contact";
import Footer from "./components/footer";
import Services from "./components/services";
import GraphicDesginService from "./components/services/gdservice";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <GraphicDesginService />
      <ContactMe />
      <Footer />
    </>
  );
}
