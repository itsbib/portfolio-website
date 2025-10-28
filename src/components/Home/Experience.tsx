import { CircleIcon } from "@phosphor-icons/react";

export default function Experience() {
  return (
    <div className="mt-5">
      <h2 className="font-semibold ">Experience</h2>

      <div className="flex flex-col items-center w-full my-20">
        <div className="flex flex-col gap-10 relative">
          <div className="absolute left-[4px] top-[30px] bottom-[30px] w-[2px] bg-gray-300 z-0 max-[456px]:bottom-[26px]"></div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="flex justify-center items-center">
              <CircleIcon size={10} weight="bold" />
            </div>
            <div>
              <h2>Mohoda Tech Pvt. Ltd.</h2>
              <p className="opacity-70">Founder & CEO / Dec 2024 - Present</p>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="flex justify-center items-center">
              <CircleIcon size={10} weight="bold" />
            </div>
            <div>
              <h2>Freelance</h2>
              <p className="opacity-70">
                Full Stack Developer & Designer / July 2022 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
