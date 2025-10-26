"use client";

import { blogs, IBlogs } from "@/app/creations/page";
import { useRouter } from "next/navigation";

export default function Thoughts() {
  const router = useRouter();

  const blog: IBlogs[] = blogs.sort(() => Math.random() - 0.5).slice(0, 3);

  const handleBlogsClick = (slug: string) => {
    router.push(`/creations/${slug}`);
  };

  return (
    <div>
      <h2 className="font-semibold">Thoughts</h2>

      <div className="text-end flex flex-col gap-15 my-20">
        {blog.map((thought) => (
          <div
            className="cursor-pointer"
            key={thought.title}
            onClick={() => thought.slug && handleBlogsClick(thought.slug)}
          >
            <p className="subtext">{thought.writtenDate}</p>
            <h3 className="justify-self-end line-clamp-1 font-normal">
              {thought.title}
            </h3>
            <p className="opacity-70 line-clamp-2">
              {thought.description.length > 80
                ? `${thought.description.substring(0, 80)}...`
                : thought.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
