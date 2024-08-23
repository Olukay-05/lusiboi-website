import Button from "../reusable-component/Button";

function DescriptionD() {
  return (
    <article className="text-stone-200 flex items-center md:items-start py-20 md:py-40 xl:py-10 flex-col gap-5 md:gap-10">
      <h3 className="rainbow text-center lg:px-20 text-xl 2xl:px-0 font-bold lg:text-4xl xl:px-10">
        Movie Production
      </h3>
      <p className="text-stone-200 lg:text-clamp px-[3rem] text-center md:text-left lg:px-20 xl:px-10 2xl:px-0 lg:text-xl">
        From script development to post-production, we handle all aspects of
        filmmaking. Our team of experienced professionals ensures that every
        film we produce is of the highest quality.
      </p>
      <div className="lg:px-20 xl:px-10 2xl:px-0">
        <Button type="primary_gold">BOOK NOW</Button>
      </div>
    </article>
  );
}

export default DescriptionD;
