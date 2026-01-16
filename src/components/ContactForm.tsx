"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(serviceId, templateId, form, publicKey).then(
      () => setStatus("Message sent! 🎉"),
      (error) => {
        console.error(error);
        setStatus("Failed to send 😢");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          required
          className="flex-1 p-2 border border-white/10 rounded-lg md:placeholder:text-[14px] placeholder:text-[12px] focus:outline-none font-[500]"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
          className="flex-1 p-2 border border-white/10 rounded-lg md:placeholder:text-[14px] placeholder:text-[12px] focus:outline-none font-[500]"
        />
      </div>
      <textarea
        name="message"
        placeholder="Enter your message"
        onChange={handleChange}
        required
        className="p-2 border border-white/10 rounded-lg w-full md:placeholder:text-[14px] placeholder:text-[12px] focus:outline-none min-h-40 font-[500]"
      ></textarea>

      <button
        type="submit"
        className=" text-white py-2 border border-white/10 rounded-lg bg-white/5 text-[14px] cursor-pointer hover:bg-white/10 font-[500]"
      >
        Send Message
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
