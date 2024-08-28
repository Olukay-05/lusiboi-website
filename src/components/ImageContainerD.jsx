import eventManagementA from "../assets/eventManagementA.svg";
import eventManagementB from "../assets/eventManagementB.svg";

function ImageContainerD() {
  return (
    <article className="relative w-[15rem] h-[15rem]  sm:w-0 sm:h-0 sm:mt-[28rem] mx-auto sm:mx-0 flex md:items-end md:justify-end md:w-[68rem] text-stone-200">
      <div className="absolute z-1 w-[11rem] md:w-[22rem] bottom-[1px] right-[1px] lg:bottom-[100px] lg:right-[105px]">
        <img
          src={eventManagementA}
          alt="image"
          className="rounded-[2rem] md:rounded-[5rem]"
        />
      </div>
      <div className="rounded-xl w-[11rem] md:w-[22rem]">
        <img
          src={eventManagementB}
          alt="image2"
          className="rounded-[2rem] md:rounded-[5rem]"
        />
      </div>
    </article>
  );
}

export default ImageContainerD;
