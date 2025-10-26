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
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, conseq",
    writtenBy: "Abc Abc",
    writerDesc: "CEO, ABC",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, conseq",
    writtenBy: "Abc",
    writerDesc: "CEO, ABC",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

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
