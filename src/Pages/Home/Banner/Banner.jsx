import Chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="">
      <div className="hero min-h-[75vh]  flex justify-center items-center background-image-banner">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={Chair}
            className="w-full md:min-w-[35vw] rounded-lg shadow-2xl"
          />
          <div className="mt-[30px]  ">
            <h1 className="text-[32px] md:text-[48px] font-bold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-gradient">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
