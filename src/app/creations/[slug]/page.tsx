"use client";

import React from "react";
import { CaretLeftIcon, ClockIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import BlogContent from "@/components/Blogs/renderBlogs";
import { blogs } from "@/types/blog";

interface IProps {
  params: Promise<{ slug: string }>;
}

const BlogDetail = ({ params }: IProps) => {
  const router = useRouter();
  const { slug } = React.use(params);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/creations");
    }
  };

  return (
    <div>
      <div
        className="flex items-center my-5 cursor-pointer gap-1"
        onClick={handleGoBack}
      >
        <CaretLeftIcon size={14} />
        <p className="subtext mt-[1px]">Go Back</p>
      </div>
      <h2 className="font-semibold">{blog.title}</h2>
      <p className="text-justify opacity-70 my-2">{blog.description}</p>

      <div className="flex justify-between my-8">
        <span>
          <h3>Bibek Karki</h3>
          <p className="subtext">Author</p>
        </span>

        <span className="items-center flex">
          <p className="subtext">{blog.writtenDate}</p>
        </span>

        <span className="flex items-center gap-2">
          <ClockIcon size={14} />
          <p className="subtext mt-[2px]">{blog.readTime}</p>
        </span>
      </div>
      <div className="w-full h-[1px] bg-white/50 my-10" />
      <BlogContent content={blog.content} />
    </div>
  );
};

export default BlogDetail;
