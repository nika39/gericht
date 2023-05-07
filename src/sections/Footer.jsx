import images from "../constants/images";

function Footer() {
  return (
    <div
      className="bg-cover bg-fixed pb-20 pt-[320px] 2xs:pt-[290px] md:pb-32"
      style={{ backgroundImage: `url(${images.bg})` }}
    >
      <div className="wrapper text-center">
        <div className="-mx-4 flex flex-wrap justify-between max-md:space-y-16">
          <div className="w-full px-4 md:w-4/12 lg:w-3/12 lg:pt-6">
            <h1 className="font-heading text-[32px]">Contact Us</h1>
            <p className="mt-4 leading-[175%] tracking-[.04em] text-grey lg:mt-6">
              9 W 53rd St, New York, NY 10019, USA
            </p>
            <p className="mt-2 leading-[175%] tracking-[.04em] text-grey">+1 212-344-1230</p>
            <p className="mt-2 leading-[175%] tracking-[.04em] text-grey">+1 212-344-1230</p>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-3/12">
            <a
              href="#top"
              className="font-heading text-[32px] font-bold uppercase text-golden lg:text-[46px] xl:text-[64px]"
            >
              Gerícht
            </a>
            <div className="mt-4 space-y-4 lg:mt-8">
              <p className="leading-[175%] tracking-[.04em]">
                "The best way to find yourself is to lose yourself in the service of others.”
              </p>
              <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
              <div className="flex justify-center space-x-4">
                <a href="#top">
                  <svg
                    className="h-5 fill-[#F5EFDB] transition-colors hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a href="#top">
                  <svg
                    className="h-5 stroke-[#F5EFDB] transition-colors hover:stroke-white"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#top">
                  <svg
                    className="h-5 stroke-[#F5EFDB] transition-colors hover:stroke-white"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-3/12 lg:pt-6">
            <h1 className="font-heading text-[32px]">Working Hours</h1>
            <p className="mt-4 leading-[175%] tracking-[.04em] text-grey lg:mt-6">
              Monday-Friday: <br /> 08:00 am -12:00 am
            </p>
            <p className="mt-2 leading-[175%] tracking-[.04em] text-grey">
              Saturday-Sunday: <br /> 07:00am -11:00 pm
            </p>
          </div>
        </div>
        <div className="mt-16 leading-[175%] tracking-[.04em] text-grey">2021 Gerícht. All Rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
