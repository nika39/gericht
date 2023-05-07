import Award from "../components/Award";
import { awards } from "../constants/data";
import images from "../constants/images";

function AwardsAndRecognitions() {
  return (
    <div className="bg-cover bg-fixed py-20 md:py-32" style={{ backgroundImage: `url(${images.bg})` }}>
      <div className="wrapper flex max-md:flex-col max-md:gap-y-8 md:justify-between">
        <div className="flex flex-col justify-center md:w-3/5 xl:w-6/12">
          <div className="mb-2 lg:mb-4">
            <div className="font-heading text-xl font-bold capitalize lg:text-2xl">Awards & recognition</div>
            <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
          </div>
          <div className="space-y-8 lg:space-y-10 xl:space-y-16">
            <h1 className="font-heading text-[44px] font-semibold capitalize text-golden md:text-[30px] xl:text-[64px]">
              Our Laurels
            </h1>
            <div className="grid grid-cols-2 gap-x-2 gap-y-10 xl:gap-x-8 xl:gap-y-16">
              {awards.map((award, i) => (
                <Award key={i} title={award.title} subtitle={award.subtitle} image={award.imgUrl} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-[36%] xl:w-5/12">
          <img className="xs:max-md:w-4/6" src={images.laurels} width={528} height={656} alt="laurels" />
        </div>
      </div>
    </div>
  );
}

export default AwardsAndRecognitions;
