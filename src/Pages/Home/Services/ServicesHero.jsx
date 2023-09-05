import Treatment from "../../../assets/images/treatment.png";
const ServicesHero = () => {
  return (
    <div className="hero my-[56px] md:my-[160px] ">
      <div className="md:hero-content flex-col lg:flex-row md:space-x-[102px] space-y-[37px] md:space-y-0 ">
        <img src={Treatment} className="w-full md:w-[458px] rounded-[8px]" />
        <div className="text-left">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-gradient">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
