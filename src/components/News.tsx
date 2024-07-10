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
  const [articleNum, setArticleNumber] = useState(5);
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 pl-1">
      <h4 className="font-bold text-xl px-4">Whats happening today</h4>
      {news.slice(0, articleNum).map((article) => (
        <>
          <div>
            <Image
              src={article.urlToImage}
              alt={article.description}
              width={200}
              height={200}
            />
          </div>
          <h2 className="line-clamp-1">{article.title}</h2>
        </>
      ))}
    </div>
  );
};

export default News;
