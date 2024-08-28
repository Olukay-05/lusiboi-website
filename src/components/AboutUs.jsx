// import whiteImg from "../assets/maskWhite.svg";
// import blackImg from "../assets/maskBlack.svg";
import luciboi from "../assets/lusiboi-lg.png";

function AboutUs() {
  return (
    <section id="about" className="bg-custom-gradient z-20">
      <section className=" flex items-center gap-5 flex-col lg:block transition-opacity duration-3000 opacity-0 ease-in-out">
        <div className="w-16 mt-24 lg:hidden ">
          <img src={luciboi} alt="Logo" />
        </div>
        {/* <h1 className="tracking-[0.8rem] text-6xl text-center sm:mt-28 text-zinc-300 lg:text-[15rem] lg:tracking-[4rem]">
          LUSIBOI
          <span className="text-[1rem] tracking-[0.5rem] text-lg block lg:text-[2rem] lg:tracking-[2.5rem]">
            ENTERTAINMENT
          </span>
        </h1> */}

        <h1 className="tracking-[0.3rem] text-4xl text-center text-zinc-300 sm:text-5xl sm:tracking-[0.5rem] md:text-6xl md:tracking-[0.6rem] lg:text-[10rem] lg:tracking-[2.5rem] xl:text-[12rem] xl:tracking-[4rem] sm:mt-18 lg:mt-32 lg:pt-[4rem]">
          LUSIBOI
          <span className="block text-lg tracking-[0.3rem] sm:text-xl sm:tracking-[0.4rem] md:text-2xl md:tracking-[0.5rem] lg:text-[1.5rem] lg:tracking-[1.5rem] xl:text-[2rem] xl:tracking-[2rem]">
            ENTERTAINMENT
          </span>
        </h1>
      </section>

      <section className="transition-opacity duration-3000 opacity-0 ease-in-out">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-10 lg:mt-32 2xl:mx-64">
          <div className="lg:flex lg:h-80 lg:w-[80rem] ">
            {/* <div className="hidden lg:block">
              <img src={blackImg} alt="image-2" />
            </div>
            <div className="md:mt-16 hidden lg:block">
              <img src={whiteImg} alt="image-1" />
            </div> */}
            <div className="hidden lg:block lg:w-52 ">
              <img src={luciboi} alt="Logo" />
            </div>
          </div>
          <div className="text-center lg:text-left p-4 text-stone-200 lg:text-clamp lg:pl-24 2xl:pl-40 lg:text-xl ">
            <p>
              Lusiboi Entertainment is a dynamic and innovative company
              specializing in movie production and music across all genres. We
              are dedicated to discovering and promoting talent, producing
              high-quality content, and delivering top-notch entertainment
              experiences. Our enthusiasm towards creativity and excellence
              drives us to persistently push the boundaries of what is possible
              in the entertainment industry.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
