import React, { useEffect, useState } from "react";
import desktopDivider from "../images/pattern-divider-desktop.svg";
import mobileDivider from "../images/pattern-divider-mobile.svg";
import { FetchData } from "../App";

interface Props {
  slip: {
    advice: string;
    id: number;
  } | null;
  fetchAdvice: () => Promise<FetchData["slip"]>;
}

const Advice = ({ slip, fetchAdvice }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      console.log(width);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={`text-center bg-neutralDGB p-10 relative rounded-xl ${
        width > 800 ? "max-w-xl" : "max-w-md mx-6"
      }`}>
      <p className="text-primaryNG uppercase tracking-advice text-sm mb-10">
        Advice #{slip?.id}
      </p>
      <h1 className="text-2xl mb-10">&ldquo;{slip?.advice}&rdquo;</h1>
      <img
        className="mb-4 mx-auto"
        src={width > 1440 ? desktopDivider : mobileDivider}
        alt=""
      />
      <button
        onClick={fetchAdvice}
        className="bg-primaryNG w-14 h-14 mx-auto flex justify-center items-center rounded-full hover:shadow-primary focus:shadow-primary focus:outline-none absolute translate-y-1/4 left-1/2 -translate-x-1/2 active:translate-y-4 group">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="group-focus:animate-spin">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
        <span className="visually-hidden">Menu</span>
      </button>
    </div>
  );
};

export default Advice;
