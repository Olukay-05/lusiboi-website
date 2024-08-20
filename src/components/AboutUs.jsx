import whiteImg from "../assets/maskWhite.svg";
import blackImg from "../assets/maskBlack.svg";
import luciboi from "../assets/lusiboi-lg.png";

function AboutUs() {
  return (
    <div className="bg-custom-gradient">
      <section>
        <h1 className=" text-7xl text-center mt-28 lg:text-zinc-300 lg:text-[15rem]  lg:tracking-[4rem]">
          LUSIBOI
          <span className="text-lg block lg:text-[2rem] lg:tracking-[2.5rem]">
            ENTERTAINMENT
          </span>
        </h1>
      </section>

      <section>
        <div className="lg:flex items-center justify-between  p-10 lg:mt-32 lg:mx-64">
          <div className="md:flex   md:h-80 md:w-[80rem] ">
            {/* <div className="hidden lg:block">
              <img src={blackImg} alt="image-2" />
            </div>
            <div className="md:mt-16 hidden lg:block">
              <img src={whiteImg} alt="image-1" />
            </div> */}
            <div className="w-52 ">
              <img src={luciboi} alt="Logo" />
            </div>
          </div>
          <div className="text-center md:text-left  p-4 text-stone-200 lg:text-clamp lg:pl-40 lg:text-xl ">
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
    </div>
  );
}

export default AboutUs;
