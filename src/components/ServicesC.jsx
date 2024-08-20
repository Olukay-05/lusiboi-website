import micro from "../assets/micro.svg";

function ServicesC() {
  return (
    <div className="hidden flex-col md:flex gap-10 items-center justify-center mt-20 text-stone-200">
      <img src={micro} alt="artist management" />
      <h4 className="text-base md:text-xl lg:text-2xl truncate whitespace-nowrap">
        ARTIST MANAGEMENT
      </h4>
    </div>
  );
}

export default ServicesC;
