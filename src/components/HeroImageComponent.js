import React from "react";
import { Link } from "react-router-dom";
import convertText from "../utils/ConvertText";

export default function HeroImageComponent({ img, category, title, date, id }) {
  return (
    <Link
      to={`/read?id=${id}&news=${convertText(title)}`}
      className="relative cursor-pointer overflow-hidden"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-center aspect-video transition-transform duration-300 transform scale-125 hover:scale-150 "
      />
      <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black w-full">
        <p className="bg-primary w-fit p-2 text-sm rounded-full text-white font-bold">
          {category}
        </p>
        <p className="text-sm font-bold line-clamp-2 hover:text-primary">
          {title}
        </p>
        <p className="text-sm">{date}</p>
      </div>
    </Link>
  );
}
