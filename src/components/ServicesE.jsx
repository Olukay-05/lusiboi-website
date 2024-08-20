import commercial from "../assets/commercial.svg";

function ServicesE() {
  return (
    <div className="hidden md:flex flex-col items-center gap-10 justify-center mt-20 text-stone-200">
      <img src={commercial} alt="marketing promotion" />
      <h4 className="text-base md:text-xl lg:text-2xl truncate whitespace-nowrap">
        MARKETING PROMOTION
      </h4>
    </div>
  );
}

export default ServicesE;
