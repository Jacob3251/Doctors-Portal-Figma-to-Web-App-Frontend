import Doc from "../../../assets/images/doctor.png";
import BG from "../../../assets/images/appointment.png";
const AppointmentSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BG})` }}
      className="flex justify-center items-center text-white px-[28px] py-[71px] md:px-[136px] my-[70px] md:mt-[250px] md:mb-[170px]"
    >
      <div className="hidden flex-1 mt-[-202px] md:block">
        <img src={Doc} alt="" className="w-auto" />
      </div>
      <div className="flex-1">
        <h1 className="text-primary text-[20px] font-bold">Appointment</h1>
        <h3 className="text-[36px] mt-[22px] leading-10">
          Make an appointment today
        </h3>
        <p className="text-[16px] my-[22px] leading-normal">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          pageIt is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsumis that it has a more-or-less normal distribution
          of letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-gradient">Get Started</button>
      </div>
    </section>
  );
};

export default AppointmentSection;
