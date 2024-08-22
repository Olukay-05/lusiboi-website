// import { default as Description } from "./Description";
// import { default as ImageContainer } from "./ImageContainer";
// import { default as Services } from "./Services";
// import { default as ServicesInformation } from "./ServicesInformation";

import ServicesA from "./ServicesA";
import ServicesB from "./ServicesB";
import ServicesC from "./ServicesC";
import ServicesD from "./ServicesD";
import ServicesE from "./ServicesE";

// import ServicesInformation from "./ServicesInformation";
import ImageContainer from "./ImageContainer";
import Description from "./Description";

function OurServices() {
  return (
    <div className="mt-20 lg:mt-40 ">
      <h2 className="text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
        Our Services
      </h2>
      <article className="grid content-center justify-items-center grid-cols-2 md:flex justify-between sm:mx-40">
        <ServicesA />
        <ServicesB />
        <ServicesC />
        <ServicesD />
        <ServicesE />
      </article>

      <article className="flex items-center justify-around lg:mt-60 lg:mx-60">
        <ImageContainer />
        <Description />
      </article>

      <article className="flex items-center justify-around lg:mt-10 lg:mx-60">
        <Description />
        <ImageContainer />
      </article>

      <article className="flex items-center justify-around lg:mt-10 lg:mx-60">
        <ImageContainer />
        <Description />
      </article>

      <article className="flex items-center justify-around lg:mt-10 lg:mx-60">
        <Description />
        <ImageContainer />
      </article>
      {/* <ServicesInformation>
        <h1>Details</h1>
        <ImageContainer />
        <Description />
      </ServicesInformation> */}
    </div>
  );
}

export default OurServices;
