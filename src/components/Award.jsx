function Award({ title, subtitle, image }) {
  return (
    <div className="flex gap-x-4 sm:gap-x-6 xl:gap-x-8">
      <div className="shrink-0">
        <img className="h-8 w-8 xs:h-14 xs:w-14 lg:h-20 lg:w-20" src={image} alt="award" />
      </div>
      <div className="max-sm:space-y-2">
        <div className="font-heading text-lg text-golden max-sm:leading-none lg:text-2xl">{title}</div>
        <p className="leading-[175%] tracking-[.04em] text-grey max-lg:text-xs">{subtitle}</p>
      </div>
    </div>
  );
}

export default Award;
