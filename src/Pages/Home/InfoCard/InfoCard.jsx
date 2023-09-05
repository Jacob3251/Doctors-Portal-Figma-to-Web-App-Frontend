import Marker from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";

import Clock from "../../../assets/icons/clock.svg";
const InfoCard = () => {
  return (
    <div className="px-[21px] grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[30px] md:-mt-[40px] text-white">
      <div className="btn-gradient drop-shadow-md flex md:space-x-[22px] flex-col p-[19px] md:flex-row items-center h-[228px] overflow-hidden">
        <div className="h-[80px] w-[80px] ">
          <img className="w-full h-full" src={Clock} alt="" />
        </div>
        <div className="mt-[30px] md:mt-0">
          <h3 className="text-[20px]">Opening hours</h3>
          <p className="text-[16px] text-[#ffffff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="bg-accent drop-shadow-md rounded-[8px] flex md:space-x-[22px] flex-col p-[19px] md:flex-row items-center h-[228px] overflow-hidden">
        <div className="h-[80px] w-[80px] ">
          <img className="w-full h-full" src={Marker} alt="" />
        </div>
        <div className="mt-[30px] md:mt-0">
          <h3 className="text-[20px] ">Opening hours</h3>
          <p className="text-[16px] text-[#ffffff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="btn-gradient drop-shadow-md flex md:space-x-[22px] flex-col p-[19px] md:flex-row items-center h-[228px] overflow-hidden">
        <div className="h-[80px] w-[80px]">
          <img className="w-full h-full" src={Phone} alt="" />
        </div>
        <div className="mt-[30px] md:mt-0">
          <h3 className="text-[20px]">Opening hours</h3>
          <p className="text-[16px] text-[#ffffff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
