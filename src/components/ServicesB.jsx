import musicNotation from "../assets/musicNotation.svg";

function ServicesB() {
  return (
    <div className="grid gap-5 w-[3rem] sm:w-[8rem] lg:w-[10rem] justify-items-center sm:flex-col  sm:p-10  md:flex sm:items-center sm:gap-10 justify-center mt-20 text-stone-200">
      <img src={musicNotation} alt="music productionn" />
      <h5 className="text-sm sm:text-base md:text-lg lg:text-xl truncate whitespace-nowrap">
        MUSIC PRODUCTION
      </h5>
    </div>
  );
}

export default ServicesB;
