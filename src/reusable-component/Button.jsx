// function Button({ children, disabled, type }) {
//   const baseGold =
//     "inline-block text-xl rounded-lg bg-gradient-to-r from-[#A46A38] to-[#EFDB6A] font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

//   const baseBlack =
//     "inline-block text-sm rounded-lg bg-black font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

//   const styles = {
//     primary_gold: baseGold + " px-4 py-3 md:px-6 md:py-4",
//     primary_black: baseBlack + " px-4 py-3 md:px-6 md:py-4",

//     small_gold: baseGold + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
//     small_black: baseBlack + " px-4 py-3 md:px-5 md:py-2.5 text-xs",

//     secondary:
//       "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
//   };

//   return (
//     <button disabled={disabled} className={styles[type]}>
//       {children}
//     </button>
//   );
// }

// export default Button;

import { useEffect, useState } from "react";

function Button({ children, disabled, type, onSubmit }) {
  const baseGold =
    "inline-block text-lg rounded-lg bg-gradient-to-r from-[#A46A38] to-[#EFDB6A] font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const baseBlack =
    "inline-block  rounded-lg bg-black font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed";

  // const baseWhite =
  //   "inline-block text-xs rounded-lg bg-stone-200 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const baseWhite =
    "inline-block text-lg rounded-lg bg-gradient-to-r from-[#A46A38] to-[#EFDB6A] font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary_gold: baseGold + " px-8 py-4 md:px-5 md:py-3",
    primary_black: baseBlack + " text-lg px-8 py-4 md:px-10 md:py-5",
    // primary_white: baseWhite + " px-8 py-4 md:px-5 md:py-3 lg:px-[3rem]",
    primary_white: baseWhite + " px-8 py-4 md:px-5 md:py-3",

    small_gold: baseGold + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    small_black: baseBlack + " px-4 py-3 md:px-5 md:py-2.5 text-xs",

    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  // State to manage the button type based on screen size
  const [responsiveType, setResponsiveType] = useState(type);

  useEffect(() => {
    const updateButtonType = () => {
      if (window.innerWidth > 768) {
        setResponsiveType(type); // Use the passed-in type (e.g., primary_black) for larger screens
      } else {
        // For small screens, adjust the type if it's one of the primary types
        if (type === "primary_black") setResponsiveType("small_black");
        else if (type === "primary_gold") setResponsiveType("small_gold");
      }
    };

    // Initial check
    updateButtonType();

    // Update button type when resizing the window
    window.addEventListener("resize", updateButtonType);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", updateButtonType);
  }, [type]);

  return (
    <button
      disabled={disabled}
      className={styles[responsiveType]}
      type={onSubmit}
    >
      {children}
    </button>
  );
}

export default Button;
