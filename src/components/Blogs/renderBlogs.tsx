import { BlogContentBlock } from "@/app/creations/page";

export default function BlogContent({
  content,
}: {
  content?: BlogContentBlock[];
}) {
  if (!content) return null;

  return (
    <div className="blog-content flex flex-col gap-4">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            if (block.level === 1)
              return (
                <h2 key={key} className="my-5 font-normal opacity-90">
                  {block.text}
                </h2>
              );
            if (block.level === 2)
              return (
                <h3 key={key} className="my-5 font-normal opacity-90">
                  {block.text}
                </h3>
              );
            return (
              <h3 key={key} className="my-5 font-normal opacity-90">
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={key}
                className="text-justify whitespace-pre-line flex justify-center"
              >
                {block.text}
              </p>
            );

          case "image":
            return <img key={key} src={block.src} alt={block.alt || ""} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
