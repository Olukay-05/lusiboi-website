import Button from "../reusable-component/Button";

function DescriptionC() {
  return (
    <article className="text-stone-200 flex items-center md:items-start py-20 md:py-40 xl:py-10 flex-col gap-5 md:gap-10">
      <h3 className="rainbow text-center lg:px-20 md:px-[1.5rem] text-xl 2xl:px-10 font-bold lg:text-4xl xl:px-10 ">
        Artist Management
      </h3>
      <p className="text-stone-200 lg:text-clamp px-[3rem] md:px-[1.5rem] text-center md:text-left lg:px-20 xl:px-10 2xl:px-10 lg:text-xl">
        We sign and manage music artists, offering them support and guidance to
        grow their careers. Our management team provides career planning,
        marketing, and promotional support to help artists achieve their goals.
      </p>
      <div className="lg:px-20 xl:px-10 2xl:px-10 md:px-[1.5rem]">
        <a href="#contact">
          <Button type="primary_gold">BOOK NOW</Button>
        </a>
      </div>
    </article>
  );
}

export default DescriptionC;
