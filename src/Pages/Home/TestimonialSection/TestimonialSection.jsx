import quote from "../../../assets/icons/quote.svg";
import p1 from "../../../assets/images/people1.png";
import p2 from "../../../assets/images/people2.png";
import p3 from "../../../assets/images/people3.png";
const TestimonialSection = () => {
  return (
    <section className="px-[27px] md:px-[56px] ">
      <div className="flex justify-between items-center md:items-start space-x-5 md:space-x-0 ">
        <div>
          <h3 className="text-primary text-[20px] font-bold">Testimonial</h3>
          <h6 className="text-accent text-[36px] font-normal md:leading-normal">
            What Our Patient Says
          </h6>
        </div>
        <div className="w-[98px] h-[79px] md:w-[192px]  md:h-[156px]">
          <img src={quote} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="my-[50px] md:my-[88px] grid grid-cols-1 md:grid-cols-3 gap-y-[45px] md:gap-y-0 md:gap-x-[57px]">
        <div className="py-[32px] px-[30px] rounded-[18px] testimonial-shadow ">
          <p className="mb-[38px]">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex justify-start items-center space-x-[22px]">
            <div>
              <div className="avatar">
                <div className="w-[64px]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={p1} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] text-accent">
                Winson Herry
              </h3>
              <h6 className="text-[16px]">California</h6>
            </div>
          </div>
        </div>
        <div className="py-[32px] px-[30px] rounded-[18px] testimonial-shadow ">
          <p className="mb-[38px]">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex justify-start items-center space-x-[22px]">
            <div>
              <div className="avatar">
                <div className="w-[64px]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={p2} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] text-accent">
                Boa Hancock
              </h3>
              <h6 className="text-[16px]">Japan</h6>
            </div>
          </div>
        </div>
        <div className="py-[32px] px-[30px] rounded-[18px] testimonial-shadow ">
          <p className="mb-[38px]">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex justify-start items-center space-x-[22px]">
            <div>
              <div className="avatar">
                <div className="w-[64px]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={p3} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[20px] text-accent">
                Dr. Kuri
              </h3>
              <h6 className="text-[16px]">Minnesota</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
