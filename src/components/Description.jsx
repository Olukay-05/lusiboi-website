import Button from "../reusable-component/Button";

function Description() {
  return (
    <article className="text-stone-200 flex items-start py-40 flex-col gap-10">
      <h3 className="rainbow text-center lg:px-20 lg:text-4xl">
        Movie Production
      </h3>
      <p className="text-stone-200 lg:text-clamp lg:px-20 lg:text-xl">
        From script development to post-production, we handle all aspects of
        filmmaking. Our team of experienced professionals ensures that every
        film we produce is of the highest quality.
      </p>
      <div className="lg:px-20">
        <Button type="primary_gold">BOOK NOW</Button>
      </div>
    </article>
  );
}

export default Description;
