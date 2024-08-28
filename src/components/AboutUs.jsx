import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import whiteImg from "../assets/maskWhite.svg";
// import blackImg from "../assets/maskBlack.svg";
import luciboi from "../assets/lusiboi-lg.png";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const splitTextIntoSpans = (element) => {
  element.innerHTML = element.innerText
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");
};

function AboutUs() {
  const h1Ref = useRef(null);
  const spanRef = useRef(null);
  const pRef = useRef(null);
  const imgRefOne = useRef(null);
  const imgRefTwo = useRef(null);

  useEffect(() => {
    const h1Element = h1Ref.current;

    // Split the text in h1Ref into spans
    splitTextIntoSpans(h1Element);

    // Animate each character with ScrollTrigger
    const animation = gsap.fromTo(
      h1Element.querySelectorAll("span"),
      { opacity: 0, y: 20 }, // Starting properties
      {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Stagger animation
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h1Element,
          start: "top 80%", // When the top of the element hits 80% of the viewport height
          end: "top 30%",
          toggleActions: "play none none none",
          onEnter: () => animation.play(),
          onLeaveBack: () => animation.pause(),
        },
      }
    );

    // Cleanup function to kill the animation when the component unmounts
    return () => {
      animation.kill();
      // srollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
      scrollTrigger: {
        trigger: h1Ref.current, // Trigger animation when h1Ref enters viewport
        start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
        end: "bottom 20%", // End the animation when the bottom of the element is 20% from the top of the viewport
        toggleActions: "play none none none", // Play animation on enter, no actions on leave
        scrub: false, // Set to true if you want the animation to sync with the scroll position
      },
    });

    // Animate h1
    tl.to(spanRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 2.5,
    });

    // Animate p
    tl.to(
      imgRefOne.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      },
      "-=2" // Overlap with previous animation by 2 seconds
    );

    // Animate p
    tl.to(
      pRef.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      },
      "-=2" // Overlap with previous animation by 2 seconds
    );

    // Animate p
    tl.to(
      imgRefTwo.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      },
      "-=2" // Overlap with previous animation by 2 seconds
    );

    // Cleanup function to kill the animation and ScrollTrigger
    return () => {
      tl.kill(); // This will also clean up the ScrollTrigger instance
    };
  }, []);

  return (
    <section id="about" className="bg-custom-gradient z-20">
      <section className=" flex items-center gap-5 flex-col lg:block transition-opacity duration-3000 opacity-0 ease-in-out">
        <div
          ref={imgRefOne}
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          className="w-16 mt-24 opacity-0 transform translate-y-[100px] lg:hidden "
        >
          <img src={luciboi} alt="Logo" />
        </div>
        {/* <h1 className="tracking-[0.8rem] text-6xl text-center sm:mt-28 text-zinc-300 lg:text-[15rem] lg:tracking-[4rem]">
          LUSIBOI
          <span className="text-[1rem] tracking-[0.5rem] text-lg block lg:text-[2rem] lg:tracking-[2.5rem]">
            ENTERTAINMENT
          </span>
        </h1> */}

        <h1 className="tracking-[0.3rem] text-4xl text-center text-zinc-300 sm:text-5xl sm:tracking-[0.5rem] md:text-6xl md:tracking-[0.6rem] lg:text-[10rem] lg:tracking-[2.5rem] xl:text-[12rem] xl:tracking-[4rem] sm:mt-18 lg:mt-32 lg:pt-[4rem]">
          <div ref={h1Ref}>LUSIBOI</div>
          <span
            ref={spanRef}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className="block opacity-0 transform translate-y-[100px] text-lg tracking-[0.3rem] sm:text-xl sm:tracking-[0.4rem] md:text-2xl md:tracking-[0.5rem] lg:text-[1.5rem] lg:tracking-[1.5rem] xl:text-[2rem] xl:tracking-[2rem]"
          >
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
            <div
              ref={imgRefTwo}
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
              className="hidden lg:block lg:w-52 opacity-0 transform translate-y-[100px]"
            >
              <img src={luciboi} alt="Logo" />
            </div>
          </div>
          <div
            ref={pRef}
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            className="text-center opacity-0 transform translate-y-[100px] lg:text-left p-4 text-stone-200 lg:text-clamp lg:pl-24 2xl:pl-40 lg:text-xl "
          >
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
