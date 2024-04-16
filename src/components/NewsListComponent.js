import React from "react";
import { Link } from "react-router-dom";
import convertText from "../utils/ConvertText";

export default function NewsListComponent({
  category,
  className,
  id,
  title,
  date,
  img,
  withImage = true,
  classNameTitle,
  withCategory = true,
}) {
  return (
    <Link
      to={`/read?id=${id}&news=${convertText(title)}`}
      className={` ${
        withImage ? "grid grid-cols-3" : "flex"
      } gap-3 cursor-pointer w-full ${className}`}
    >
      {withImage ? (
        <img
          src={img}
          alt={title}
          className="bg-primary border object-cover object-center aspect-video md:aspect-video"
        />
      ) : (
        <></>
      )}
      <div className="col-span-2">
        <p
          className={`hover:text-primary text-sm font-bold line-clamp-2 w-full ${classNameTitle}`}
        >
          {title}
        </p>
        <div className="grid md:flex md:flex-col justify-between">
          {withCategory ? (
            <p
              className={`bg-primary text-xs p-1 px-2 w-fit rounded-3xl text-white line-clamp-1`}
            >
              {category}
            </p>
          ) : (
            <></>
          )}
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </Link>
  );
}
