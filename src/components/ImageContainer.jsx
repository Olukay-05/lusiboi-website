import movieProductionA from "../assets/movie-production-a.svg";
import movieProductionB from "../assets/movie-production-b.svg";

function ImageContainer() {
  return (
    <article className=" relative flex items-end justify-end  border-red-300 w-[68rem] text-stone-200">
      <div className="absolute z-1 bottom-[110px] right-[155px]">
        <img src={movieProductionA} alt="image" className="rounded-[5rem]" />
      </div>
      <div className="rounded-xl">
        <img src={movieProductionB} alt="image2" className="rounded-[5rem]" />
      </div>
    </article>
  );
}

export default ImageContainer;
