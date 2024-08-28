import movieProductionA from "../assets/movie-production-a.svg";
import movieProductionB from "../assets/movie-production-b.svg";

function ImageContainerA() {
  return (
    <article className=" relative w-[15rem] h-[15rem] sm:w-0 sm:h-0 sm:mt-[28rem] mx-auto sm:mx-0 flex md:items-end md:justify-end xl:justify-center md:w-[68rem] text-stone-200">
      <div className="absolute z-1 w-[11rem] md:w-[22rem] bottom-[1px] right-[1px] lg:bottom-[100px] lg:right-[105px] xl:right-[180px]">
        <img
          src={movieProductionB}
          alt="image"
          className="rounded-[2rem] md:rounded-[5rem] lg:hidden xl:block"
        />
      </div>
      <div className="rounded-xl w-[11rem] md:w-[22rem]">
        <img
          src={movieProductionA}
          alt="image2"
          className="rounded-[2rem] md:rounded-[5rem]"
        />
      </div>
    </article>
  );
}

export default ImageContainerA;
