import React from "react";
import images from "../constants/images";

function Newsletter() {
  return (
    <div className="pb-8">
      <div className="wrapper h-[250px]">
        <div className="relative -bottom-[100px] border border-golden bg-black px-8 py-8 xs:-bottom-[120px] md:-bottom-[90px] md:px-16">
          <div className="space-y-8 md:space-y-16">
            <div className="text-center">
              <div className="font-heading text-xl font-bold capitalize lg:text-2xl">Newsletter</div>
              <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
              <h1 className="font-heading text-4xl font-semibold capitalize text-golden md:text-[44px] lg:text-[48px] xl:text-[64px]">
                Subscribe to Our Newsletter
              </h1>
              <p className="mt-6 leading-[175%] tracking-[.04em]">And never miss latest Updates!</p>
            </div>
            <div className="mx-auto flex max-w-2xl max-sm:flex-col max-sm:space-y-4 sm:space-x-8">
              <input
                className="grow rounded border border-golden bg-transparent p-4 transition-colors focus:border-white"
                type="email"
                placeholder="Email Address"
              />
              <div className="flex items-center justify-center">
                <button className="font-heading inline-block bg-golden px-8 py-2 font-bold leading-[175%] text-black transition-colors hover:bg-golden-dim">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
