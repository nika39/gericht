function SpecialMenuItem({ title, tags, price }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="font-heading flex-1 text-xl font-bold text-golden xl:text-2xl">{title}</div>
        <div className="mx-4 h-px w-[40px] bg-[#fafafa] sm:w-[90px] lg:mx-2 lg:w-[25px] xl:mx-4 xl:w-[90px]"></div>
        <div className="font-heading text-2xl font-bold">{price}</div>
      </div>
      <div className="text-grey">{tags}</div>
    </div>
  );
}

export default SpecialMenuItem;
