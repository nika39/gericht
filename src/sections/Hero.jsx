import images from "../constants/images";

function Hero() {
  return (
    <div className="wrapper py-16">
      <div className="flex items-center justify-between max-md:flex-col max-md:space-y-8 md:space-x-8">
        <div className="flex-1">
          <div className="mb-4">
            <p className="font-primary text-2xl font-bold capitalize leading-[130%] tracking-[.04em]">
              Chase the new flavour
            </p>
            <img width={40} height={10} src={images.spoon} alt="spoon" />
          </div>
          <h1 className="font-primary text-[70px] font-bold capitalize leading-[130%] tracking-[.04em] text-golden lg:text-[90px]">
            The Key To Fine Dining
          </h1>
          <p className="my-8 leading-[175%] tracking-[.04em] text-grey">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque
            sapien. Et, penatibus aliquam amet tellus
          </p>
          <button className="bg-golden px-8 py-2 font-primary font-bold leading-[175%] tracking-[.04em] text-black transition-colors hover:bg-golden-dim">
            Explore Menu
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <img className="lg:w-4/5" src={images.welcome} width={492} height={544} alt="welcome" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
