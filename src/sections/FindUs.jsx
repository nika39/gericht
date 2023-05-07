import images from "../constants/images";

function FindUs() {
  return (
    <div className="bg-cover bg-fixed py-20 md:py-32" style={{ backgroundImage: `url(${images.bg})` }}>
      <div className="wrapper max-md:space-y-8 md:flex md:space-x-8 xl:space-x-[96px]">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-4">
            <div className="font-heading text-xl font-bold capitalize lg:text-2xl">Contact</div>
            <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
          </div>
          <div className="space-y-8 lg:space-y-16">
            <h1 className="font-heading text-[44px] font-semibold capitalize text-golden md:text-[30px] xl:text-[64px]">
              Find Us
            </h1>
            <p className="leading-[175%] text-grey">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
            <div className="space-y-4">
              <p className="font-heading text-2xl text-golden">Opening Hours</p>
              <p className="text-grey">Mon - Fri: 10:00 am - 02:00 am</p>
              <p className="text-grey">Sat - Sun: 10:00 am - 03:00 am</p>
            </div>
            <a
              className="font-heading inline-block bg-golden px-8 py-2 font-bold leading-[175%] text-black transition-colors hover:bg-golden-dim"
              href="#top"
            >
              Visit Us
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center max-xl:flex-1 xl:w-1/2">
          <img className="xs:max-md:w-4/6" src={images.findus} width={633} height={699} alt="chef" />
        </div>
      </div>
    </div>
  );
}

export default FindUs;
