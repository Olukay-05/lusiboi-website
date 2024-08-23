import { default as AboutUs } from "../components/AboutUs";
import { default as ContactUs } from "../components/ContactUs";
import { default as FooterDetails } from "../components/FooterDetails";
import { default as Hero } from "../components/Hero";
import { default as Nav } from "../components/Nav";
import { default as OurServices } from "../components/OurServices";
import { default as Footer } from "./Footer";
import { default as Header } from "./Header";
import { default as Main } from "./Main";

function AppLayout() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Hero />
        <AboutUs />
        <OurServices />
        <ContactUs />
      </Main>
      <Footer>
        <FooterDetails />
      </Footer>
    </>
  );
}

export default AppLayout;
