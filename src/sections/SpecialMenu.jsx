import SpecialMenuItem from "../components/SpecialMenuItem";
import { cocktails, wines } from "../constants/data";
import images from "../constants/images";

function SpecialMenu() {
  return (
    <div className="wrapper space-y-16 py-20 md:py-32">
      <div className="text-center">
        <div className="mb-4">
          <div className="font-primary text-2xl font-bold capitalize leading-[130%] tracking-[.04em]">
            Menu that fits you palatte
          </div>
          <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
        </div>
        <h1 className="font-primary text-[44px] font-semibold leading-[130%] tracking-[.04em] text-golden lg:text-[64px]">
          Today’s Special
        </h1>
      </div>
      <div className="flex justify-between max-lg:flex-col max-lg:space-y-8 lg:-mx-4">
        <div className="lg:flex-1 lg:px-4 xl:w-1/3">
          <h1 className="font-heading mb-12 text-center text-[36px] font-semibold xl:text-[44px]">Wine & Beer</h1>
          <div className="space-y-[40px]">
            {wines.map((wine, i) => (
              <SpecialMenuItem key={i} title={wine.title} tags={wine.tags} price={wine.price} />
            ))}
          </div>
        </div>
        <div className="lg:w-[412px] lg:px-4 xl:w-1/3">
          <img
            className="mx-auto max-w-full xs:max-lg:max-w-[412px]"
            width={400}
            height={666}
            src={images.menu}
            alt="special menu"
          />
        </div>
        <div className="lg:flex-1 lg:px-4 xl:w-1/3">
          <h1 className="font-heading mb-12 text-center text-[36px] font-semibold xl:text-[44px]">Cocktails</h1>
          <div className="space-y-[40px]">
            {cocktails.map((wine, i) => (
              <SpecialMenuItem key={i} title={wine.title} tags={wine.tags} price={wine.price} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          className="font-heading bg-golden px-8 py-2 font-bold text-black transition-colors hover:bg-golden-dim"
          href="#top"
        >
          Know More
        </a>
      </div>
    </div>
  );
}

export default SpecialMenu;
