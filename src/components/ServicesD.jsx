import canopy from "../assets/canopy.svg";

function ServicesD() {
  return (
    <div className="hidden flex-col md:flex gap-10 items-center justify-center mt-20  text-stone-200">
      <img src={canopy} alt="event management" />
      <h5 className="text-base md:text-xl lg:text-2xl  whitespace-nowrap flex w-full">
        EVENT MANAGEMENT
      </h5>
    </div>
  );
}

export default ServicesD;
