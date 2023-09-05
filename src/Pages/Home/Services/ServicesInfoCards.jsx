import Floride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whiter from "../../../assets/images/whitening.png";
const ServicesInfoCards = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[56px] md:gap-y-0 md:gap-x-[34px]">
        <div className="w-full md:w-[440px] h-[310px] bg-[#fff] rounded-[18px] drop-shadow-md flex flex-col justify-center items-center">
          <img src={Floride} alt="" />
          <h3 className="mt-[38px] md:mt-[34px] mb-[8px] text-[20px] text-accent font-semibold">
            Fluoride Treatment
          </h3>
          <p className="text-[16px] text-black font-normal mx-[20px] md:mx-[56px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora
            culpa quos.
          </p>
        </div>
        <div className="w-full md:w-[440px] h-[310px] bg-[#fff] rounded-[18px] drop-shadow-md flex flex-col justify-center items-center">
          <img src={Cavity} alt="" />
          <h3 className="mt-[38px] md:mt-[34px] mb-[8px] text-[20px] text-accent font-semibold">
            Cavity Filling
          </h3>
          <p className="text-[16px] text-black font-normal mx-[20px] md:mx-[56px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora
            culpa quos.
          </p>
        </div>
        <div className="w-full md:w-[440px] h-[310px] bg-[#fff] rounded-[18px] drop-shadow-md flex flex-col justify-center items-center">
          <img src={Whiter} alt="" />
          <h3 className="mt-[38px] md:mt-[34px] mb-[8px] text-[20px] text-accent font-semibold">
            Teeth Whitening
          </h3>
          <p className="text-[16px] text-black font-normal mx-[20px] md:mx-[56px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora
            culpa quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfoCards;
