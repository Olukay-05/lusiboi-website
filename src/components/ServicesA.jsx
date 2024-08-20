import movieProjector from "../assets/movieProjector.svg";

function ServicesA() {
  return (
    <div className="hidden flex-col  p-10  md:flex items-center gap-10 justify-center mt-20 text-stone-200">
      <img src={movieProjector} alt="movie production" />
      <h5 className="text-base  md:text-xl lg:text-2xl truncate whitespace-nowrap">
        MOVIE PRODUCTION
      </h5>
    </div>
  );
}

export default ServicesA;
