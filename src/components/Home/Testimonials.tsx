import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useState } from "react";

interface ITestimonials {
  description: string;
  writtenBy: string;
  writerDesc: string;
}

const testimonials: ITestimonials[] = [
  {
    description:
      "Bibek is an incredibly passionate and creative individual. His innovative problem-solving skills and deep enthusiasm for technology make him a valuable team member. It’s been a pleasure working with him, and I highly recommend him to anyone looking for a dedicated and talented professional.",
    writtenBy: "Anup Subedi",
    writerDesc: "Founder, Mohoda",
  },
  {
    description:
      "Bibek is a passionate and talented full-stack developer. His strong skills across UI/UX, React, Next.js, Node.js, MongoDB etc. combined with his creativity and problem-solving mindset, make him a valuable teammate. I highly recommend him for any project or team looking for a dedicated and innovative developer.",
    writtenBy: "Gaurav Pyakurel",
    writerDesc: "Frontend Dev",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * testimonials.length)
  );

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <div className="flex flex-col my-10">
      <h2 className="font-semibold">Testimonials</h2>

      <div className="flex justify-center my-20">
        <div className="flex gap-10 max-w-2xl">
          <button onClick={handlePrev} className="cursor-pointer">
            <CaretLeftIcon />
          </button>

          <div className="flex flex-col gap-4 relative">
            <p className="text-justify ">{testimonial.description}</p>

            <div className="flex flex-col items-end absolute bottom-[-80px] right-0 ">
              <h3 className="font-semibold">{testimonial.writtenBy}</h3>
              <p className="opacity-70">{testimonial.writerDesc}</p>
            </div>
          </div>

          <button onClick={handleNext} className="cursor-pointer">
            <CaretRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
