import commercial from "../assets/commercial.svg";

function ServicesE() {
  return (
    <div className="grid  gap-5 w-[4rem] sm:w-[8rem] lg:w-[10rem] justify-items-center col-span-2 sm:flex-col sm:p-10 md:flex sm:items-center sm:gap-10 lg:items-center lg:justify-center mt-20 text-stone-200">
      <img src={commercial} alt="marketing promotion" />
      <h4 className="text-sm md:text-lg lg:text-xl  truncate whitespace-nowrap">
        MARKETING PROMOTION
      </h4>
    </div>
  );
}

export default ServicesE;
