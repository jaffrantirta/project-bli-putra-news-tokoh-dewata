import moment from "moment";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { NewsListComponent } from "../components";
import { showFrom } from "../context/HitContext";
import { show } from "../context/NewsContext";
import { ERROR_MESSAGE } from "../utils/Constant";

export default function NewsListSection() {
  const [newsListLeft, setNewsListLeft] = useState([]);
  const [newsListMiddle, setNewsListMiddle] = useState([]);
  const [newsListRight, setNewsListRight] = useState([]);
  useEffect(() => {
    async function getNewsLeft() {
      const { data, error } = await show()
        .eq("category_id", 1)
        .select("*, categories(*)");
      if (error) {
        Swal.fire(ERROR_MESSAGE, error.message, "error");
        throw error;
      }
      setNewsListLeft(data);
    }
    async function getNewsMiddle() {
      const { data, error } = await show().select("*, categories(*)");
      if (error) {
        Swal.fire(ERROR_MESSAGE, error.message, "error");
        throw error;
      }
      setNewsListMiddle(data);
    }
    async function getNewsRight() {
      const { data, error } = await showFrom({
        column: "hit",
        ascending: false,
      });
      if (error) {
        Swal.fire(ERROR_MESSAGE, error.message, "error");
        throw error;
      }
      setNewsListRight(data);
    }
    getNewsLeft();
    getNewsMiddle();
    getNewsRight();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-10 h-fit md:h-screen w-screen">
      {/* left */}
      <div className="hidden md:flex flex-col gap-3 overflow-y-auto w-full items-center">
        <div className="border w-full border-b-primary">
          <p className="text-md text-center text-primary font-bold">Terkini</p>
        </div>
        {newsListLeft.map((item, index) => (
          <>
            <NewsListComponent
              key={index}
              id={item.id}
              withImage={false}
              classNameTitle={"text-blue-900"}
              title={item.title}
              date={moment(item.created_at).format("ll")}
              category={item.categories.name}
            />
            <div className="border-b border w-full border-slate-100"></div>
          </>
        ))}
      </div>

      {/* middle */}
      <div className="col-span-2 flex flex-col gap-5 overflow-y-auto">
        {newsListMiddle.map((item, index) => (
          <NewsListComponent
            key={index}
            id={item.id}
            title={item.title}
            img={item.image_public_url}
            date={moment(item.created_at).format("ll")}
            category={item.categories.name}
          />
        ))}
      </div>

      {/* right */}
      <div className="flex bg-slate-200 p-3 rounded-3xl shadow-lg flex-col gap-5 overflow-y-auto">
        <div className="border border-b border-b-primary">
          <p className="text-md text-center text-primary font-bold">
            Berita Terpopuler
          </p>
        </div>
        {newsListRight.map((item, index) => (
          <NewsListComponent
            id={item.news.id}
            key={index}
            title={item.news.title}
            img={item.news.image_public_url}
            date={moment(item.news.created_at).format("ll")}
            withCategory={false}
          />
        ))}
      </div>
    </div>
  );
}
