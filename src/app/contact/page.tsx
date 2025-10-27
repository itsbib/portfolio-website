"use client";

import ContactForm from "@/components/ContactForm";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h2 className="font-semibold">Contact</h2>
      <p className="subtext my-1">
        {`I'm always looking to collaborate on interesting projects with great
        people. Need a hand? I got two! :D`}
      </p>

      <div className="flex gap-6 my-10">
        <Link
          href="mailto:itsbibekkarki@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="flex items-center  gap-1">
            Email
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
      <div className="flex justify-center my-20 border border-white/10 rounded-2xl p-7 flex-col bg-white/1">
        <div className="mb-7">
          <h3>Send a message</h3>
          <p className="subtext">
            {`Fill out the form below and I'll get back to you as soon as
            possible.`}
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
