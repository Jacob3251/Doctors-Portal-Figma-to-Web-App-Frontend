import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InfoCard from "../InfoCard/InfoCard";
import Services from "../Services/Services";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <AppointmentSection></AppointmentSection>
      <TestimonialSection></TestimonialSection>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
