import images from "../constants/images";

function AboutUs() {
  return (
    <div className="bg-cover bg-fixed py-20 md:py-32" style={{ backgroundImage: `url(${images.bg})` }}>
      <div
        className="wrapper flex items-center justify-center bg-[length:390px_415px] bg-center bg-no-repeat max-md:flex-col max-md:space-y-8"
        style={{ backgroundImage: `url(${images.G})` }}
      >
        <div className="flex-1 space-y-8 text-right">
          <div>
            <h1 className="font-primary text-[44px] font-semibold leading-[130%] tracking-[.04em] text-golden lg:text-[64px]">
              About Us
            </h1>
            <img className="inline-block rotate-180" src={images.spoon} width={40} height={10} alt="spoon" />
          </div>
          <p className="leading-[175%] tracking-[.04em] text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere
            tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <a
            className="inline-block bg-golden px-8 py-2 font-primary font-bold leading-[175%] tracking-[.04em] text-black transition-colors hover:bg-golden-dim"
            href="#top"
          >
            Know More
          </a>
        </div>
        <div className="mx-[85px]">
          <img className="h-[700px]" width={84} height={700} src={images.knife} alt="knife" />
        </div>
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="font-primary text-[44px] font-semibold leading-[130%] tracking-[.04em] text-golden lg:text-[64px]">
              Our History
            </h1>
            <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
          </div>
          <p className="leading-[175%] tracking-[.04em] text-grey">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse
            interdum mi aliquam In sed odio nec aliquet.
          </p>
          <a
            className="inline-block bg-golden px-8 py-2 font-primary font-bold leading-[175%] tracking-[.04em] text-black transition-colors hover:bg-golden-dim"
            href="#top"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
