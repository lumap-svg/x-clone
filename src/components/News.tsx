"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
type articleT = {
  source: { id: string | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
type newsT = {
  articles: articleT[];
};
const News = () => {
  const [news, setNews] = useState<articleT[]>([]);
  const [articleNum, setArticleNumber] = useState(3);
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded pt-2 pl-1">
      <h4 className="font-bold text-xl px-4">Whats happening today</h4>
      {news.slice(0, articleNum).map((article) => (
        <>
          <div key={article.url} className="">
            <a href={article.url} target="_blank">
              <div className="flex items-center justify-between px-2 hover:bg-gray-200 transition-all duration-200">
                <div className="space-y-0.5">
                  <h6 className="text-sm font-bold">{article.title}</h6>
                  <p className="text-xs font-medium text-gray-500">
                    {article.source.name}
                  </p>
                </div>

                <Image
                  src={article.urlToImage}
                  alt={article.author}
                  width={70}
                  height={70}
                  className="rounded-xl object-contain"
                />
              </div>
            </a>
          </div>
        </>
      ))}
      <button
        onClick={() => setArticleNumber(articleNum + 3)}
        className="pl-4 pb-3 text-blue-300 hover:text-blue-400 text-sm"
      >
        load more
      </button>
    </div>
  );
};

export default News;
