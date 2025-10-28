"use client";

import { blogs } from "@/types/blog";
import { useRouter } from "next/navigation";

interface IContents {
  title: string;
  description: string;
  link: string;
}

const contents: IContents[] = [
  {
    title: "The Raspberry Pi 5: Still Worth It?",
    description: "Aug 2025 / Youtube",
    link: "https://www.youtube.com/watch?v=a3GRf5fxWXQ",
  },
];

export default function Creations() {
  const router = useRouter();

  const handleBlogsClick = (slug: string) => {
    router.push(`/creations/${slug}`);
  };

  return (
    <div>
      <h2 className="font-semibold">Blogs</h2>
      <div className="flex flex-col my-15 gap-10">
        {blogs.map((blog) => (
          <div key={blog.slug} className="flex flex-col items-end w-auto">
            <p className="opacity-70">{blog.writtenDate}</p>
            <h2
              className="line-clamp-1 cursor-pointer"
              onClick={() => blog.slug && handleBlogsClick(blog.slug)}
            >
              {blog.title}
            </h2>
            <p className="opacity-70 line-clamp-2">
              {blog.description.length > 80
                ? `${blog.description.substring(0, 80)}...`
                : blog.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="font-semibold">Videos</h2>
      <div className="flex flex-col my-15 gap-10">
        {contents.map((content) => (
          <div
            key={content.title}
            className="flex flex-col justify-end items-end"
          >
            <a
              key={content.title}
              href={content.link}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="line-clamp-2">{content.title}</h2>
            </a>
            <p className="opacity-70">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
