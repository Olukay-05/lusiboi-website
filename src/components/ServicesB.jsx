import musicNotation from "../assets/musicNotation.svg";

function ServicesB() {
  return (
    <div className="hidden  flex-col md:flex gap-10 items-center justify-center mt-20  text-stone-200">
      <img src={musicNotation} alt="music productionn" />
      <h5 className="text-base md:text-xl lg:text-2xl truncate whitespace-nowrap">
        MUSIC PRODUCTION
      </h5>
    </div>
  );
}

export default ServicesB;
