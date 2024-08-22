import luciboi from "../assets/lusiboi-lg.png";
import film from "../assets/film.svg";

import Button from "../reusable-component/Button";

function Hero() {
  return (
    <div className="  bg-stone-200 text-center md:text-left relative text-stone-800  pt-20 pb-20 md:pt-12 md:pb-12 sm:flex sm:items-center sm:justify-around lg:px-60 lg:pt-28 lg:pb-[15rem]">
      <div className="flex items-start justify-between  p-4 flex-col gap-6 pb-8 md:px-20 md:text-center xl:gap-12   ">
        <h1 className="font-libre-baskerville lg:text-center xl:text-left font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ">
          Your Story, Our Expertise
        </h1>
        <p className="hind-regular text-base lg:text-left sm:text-lg md:text-xl leading-relaxed">
          Your ultimate destination for all things entertainment. From
          groundbreaking films to unforgettable events, Lusiboi Entertainment is
          your partner in turning creativity into impact. Let&apos;s make
          something unforgettable together.
        </p>
        <div className="mx-auto md:block">
          <Button type="primary_black">Let&apos;s Get Started</Button>
        </div>
      </div>

      <div className=" w-[55rem]  pl-20 hidden xl:block">
        <img src={luciboi} alt="image" className=" w-full" />
      </div>

      <div className="  absolute z-1 bottom--1 w-[12rem] left-0 lg:bottom-[-4rem] lg:left-[0rem] lg:w-[40rem]">
        <img src={film} alt="film" className="" />
      </div>
    </div>
  );
}

export default Hero;
