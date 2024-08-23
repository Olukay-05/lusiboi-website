import luciboi from "../assets/lusiboi-lg.png";
import film from "../assets/film.svg";

import Button from "../reusable-component/Button";

function Hero() {
  return (
    <div className="bg-stone-200 text-center relative text-stone-800  pt-20 pb-20  md:pt-12 md:pb-12 sm:flex sm:items-center sm:justify-around xl:px-0 2xl:px-20 lg:pt-28 lg:pb-[15rem]">
      <div className="flex items-start justify-between  p-4 flex-col lg:text-center gap-6 lg:gap-10 pb-8 md:px-20 md:text-center xl:gap-12   ">
        <h1 className="font-libre-baskerville xl:text-left font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
          Your Story, Our Expertise
        </h1>
        <p className="hind-regular text-base lg:text-center sm:text-lg md:text-xl xl:text-left leading-relaxed">
          Your ultimate destination for all things entertainment. From
          groundbreaking films to unforgettable events, Lusiboi Entertainment is
          your partner in turning creativity into impact. Let&apos;s make
          something unforgettable together.
        </p>
        <div className="mx-auto xl:mx-0 md:block">
          <Button type="primary_black">Let&apos;s Get Started</Button>
        </div>
      </div>

      <div className=" w-[55rem] xl:w-[50rem] pl-20 xl:pl-0 xl:pr-20 hidden xl:block">
        <img src={luciboi} alt="image" className=" w-full" />
      </div>

      <div className="absolute z-1 bottom--1 w-[12rem] left-0 sm:bottom-[-1.3rem] md:bottom-[-1.5rem] md:left-[0rem] lg:bottom-[-4rem] lg:left-[0rem] xl:bottom-[-2.5rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]">
        <img src={film} alt="film" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
