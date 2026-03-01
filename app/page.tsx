import AboutUs from "./components/aboutus";
import Banner from "./components/banner";
import ContactMe from "./components/contact";
import Footer from "./components/footer";
import Services from "./components/services";
import WhatWebuild from "./components/whatwebuild";


export default function Home() {
  return (
<>
      <Banner />
      <AboutUs/>
      <Services />

      <ContactMe />
      <Footer />
    </>

  );
}
