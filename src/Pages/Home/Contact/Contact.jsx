import BG from "../../../assets/images/appointment.png";
const Contact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat" }}
      className="flex flex-col justify-center items-center"
    >
      <h3 className="text-[20px] font-bold text-primary mt-[65px] mb-[10px]">
        Contact Us
      </h3>
      <h6 className="text-[36px] font-normal text-white mb-[41px]">
        Stay connected with us
      </h6>
      <form className="flex flex-col w-full px-[34px] md:w-[450px]">
        <input
          type="text"
          placeholder="Email Address"
          className="mb-[19px] w-full pl-[19px] py-[15px] rounded-[8px]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="mb-[19px] w-full pl-[19px] py-[15px] rounded-[8px]"
        />
        <textarea
          type="text"
          placeholder="Your Message"
          className="w-full pl-[19px] py-[15px] rounded-[8px] h-[136px] mb-[35px]"
        />
        <input
          type="submit"
          className="py-3 btn-gradient w-[120px] mx-auto mb-[71px]"
        />
      </form>
    </section>
  );
};

export default Contact;
