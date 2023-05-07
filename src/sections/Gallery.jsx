import { useRef } from "react";
import GalleryImage from "../components/GalleryImage";
import images from "../constants/images";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05];

function Gallery() {
  const scrollRef = useRef();

  const scrollTo = direction => {
    if (direction === "left") {
      return (scrollRef.current.scrollLeft -= 300);
    }

    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="mx-auto max-w-[1920px] py-20 max-lg:px-4 md:py-32 lg:pl-4">
      <div className="flex max-lg:flex-col max-lg:space-y-16 lg:space-x-16">
        <div className="max-w-[500px] lg:min-w-[400px]">
          <div className="mb-4">
            <div className="font-heading text-2xl font-bold capitalize">Instagram</div>
            <img className="inline-block" src={images.spoon} alt="spoon" width={40} height={10} />
          </div>
          <div className="space-y-6">
            <h1 className="font-heading text-[44px] font-semibold text-golden lg:text-[64px]">Photo Gallery</h1>
            <p className="leading-[175%] tracking-[.04em] text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit
              scelerisque egestas mu.
            </p>
            <a
              className="font-heading inline-block bg-golden px-8 py-2 font-bold leading-[175%] text-black transition-colors hover:bg-golden-dim"
              href="#top"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden max-lg:grow">
          <div ref={scrollRef} className="scrollbar-hide -mx-4 flex overflow-x-scroll scroll-smooth">
            {galleryImages.map((img, i) => (
              <GalleryImage image={img} key={i} />
            ))}
          </div>
          <div className="pointer-events-none absolute top-1/2 z-10 flex w-full -translate-y-1/2 transform justify-between px-4">
            <button onClick={() => scrollTo("left")} className="pointer-events-auto">
              <svg
                className="h-8 rounded bg-black fill-white transition-colors hover:fill-golden"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <button onClick={() => scrollTo("right")} className="pointer-events-auto">
              <svg className="h-8 rounded bg-black fill-golden" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
