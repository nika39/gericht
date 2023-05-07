import images from "../constants/images";

function ChefsWord() {
  return (
    <div className="bg-cover bg-fixed py-20 md:py-32" style={{ backgroundImage: `url(${images.bg})` }}>
      <div className="wrapper max-md:space-y-8 md:flex md:space-x-8 xl:space-x-[96px]">
        <div className="flex items-center justify-center max-xl:flex-1 xl:w-1/2">
          <img className="xs:max-md:w-4/6" src={images.chef} width={630} height={784} alt="chef" />
        </div>
        <div className="flex flex-1 items-center">
          <div>
            <div className="mb-4">
              <div className="font-heading text-xl font-bold capitalize lg:text-2xl">Menu that fits you palatte</div>
              <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
            </div>
            <div className="space-y-8 lg:space-y-16">
              <h1 className="font-heading text-[44px] font-semibold capitalize text-golden md:text-[30px] xl:text-[64px]">
                What we believe in
              </h1>
              <div className="relative">
                <img className="absolute -top-3.5 left-0 w-[44px]" src={images.quote} alt="qoute" />
                <p className="indent-14 italic leading-[175%] text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu.
                  Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
                  molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-heading text-3xl text-golden">Kevin Luo</p>
                <p className="text-grey">Chef & Founder</p>
              </div>
              <img className="w-[235px]" src={images.sign} width={235} height={92} alt="chef sign" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefsWord;
