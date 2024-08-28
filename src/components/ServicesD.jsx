import canopy from "../assets/canopy.svg";

function ServicesD() {
  return (
    <div className="grid  gap-5 w-[3rem] sm:w-[8rem] lg:w-[10rem] justify-items-center sm:flex-col xl:row-span-2 sm:p-10  md:flex sm:items-center sm:gap-10 justify-center xl:justify-start mt-20 text-stone-200">
      <img src={canopy} alt="event management" />
      <h5 className="text-sm sm:text-base md:text-lg lg:text-xl truncate whitespace-nowrap">
        EVENT MANAGEMENT
      </h5>
    </div>
  );
}

export default ServicesD;
