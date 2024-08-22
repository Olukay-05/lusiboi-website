import micro from "../assets/micro.svg";

function ServicesC() {
  return (
    <div className="grid gap-5 w-[4rem] sm:w-[8rem] lg:w-[10rem] justify-items-center sm:flex-col   sm:p-10  md:flex sm:items-center sm:gap-10 justify-center mt-20 text-stone-200">
      <img src={micro} alt="artist management" />
      <h4 className="text-sm md:text-xl lg:text-2xl truncate whitespace-nowrap">
        ARTIST MANAGEMENT
      </h4>
    </div>
  );
}

export default ServicesC;
