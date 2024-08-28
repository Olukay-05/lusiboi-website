import Button from "../reusable-component/Button";

function DescriptionB() {
  return (
    <article className="text-stone-200 flex items-center md:items-start py-20 md:py-40 lg:pr-[2rem] xl:py-10 flex-col gap-5 md:gap-10">
      <h3 className="rainbow text-center lg:px-20 md:px-[1.5rem] text-xl 2xl:px-0 font-bold lg:text-4xl xl:px-10">
        Music Production
      </h3>
      <p className="text-stone-200 lg:text-clamp px-[3rem] md:px-[1.5rem] text-center md:text-left lg:px-20 xl:px-10 2xl:px-0 lg:text-xl">
        We produce and promote music across all genres, providing opportunities
        for artists to reach new heights. Our state-of-the-art recording studios
        and industry connections help artists create and distribute their music.
      </p>
      <div className="lg:px-20 xl:px-10 2xl:px-0 md:px-[1.5rem]">
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionB;
