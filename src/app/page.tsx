"use client";

import Experience from "@/components/Home/Experience";
import SkillGrid from "@/components/Home/SkillGrid";
import SkillSphere from "@/components/Home/SkillSphere";
import Testimonials from "@/components/Home/Testimonials";
import Thoughts from "@/components/Home/Thoughts";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-self-center w-full">
      <div className="flex justify-between md:flex-row flex-col">
        <div>
          <h1>Bibek Karki</h1>
          <p className="opacity-70">Developer & Designer</p>

          <p className="my-10">
            I&apos;m a full stack web & app developer who <br /> enjoys building
            applications and exploring new technologies. <br /> I believe in
            simplicity & usability.
          </p>
          <div className="flex gap-6 mt-[50px]">
            <Link
              href="https://www.gitub.com/itsbib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center  gap-1">
                Github
                <ArrowUpRightIcon />
              </p>
            </Link>
            <Link
              href="https://www.instagram.com/bibekkarkiii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center gap-1">
                Instagram <ArrowUpRightIcon />
              </p>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <SkillSphere />
        </div>
        <div className="block md:hidden">
          <SkillGrid />
        </div>
      </div>
      <Experience />
      <Thoughts />
      <Testimonials />
    </div>
  );
}
