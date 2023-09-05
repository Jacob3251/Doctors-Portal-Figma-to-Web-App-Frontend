import ServicesHero from "./ServicesHero";
import ServicesInfoCards from "./ServicesInfoCards";

const Services = () => {
  return (
    <div className="my-[130px] px-[21px] text-center">
      <h6 className="uppercase text-primary font-bold  text-[20px]">
        Our Services
      </h6>
      <h3 className="text-[36px] text-accent mb-[49px] md:mb-[70px]">
        Services We Provide
      </h3>
      {/* info card below */}
      <ServicesInfoCards></ServicesInfoCards>
      <ServicesHero></ServicesHero>
    </div>
  );
};

export default Services;
