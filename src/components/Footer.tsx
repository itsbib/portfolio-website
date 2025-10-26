"use client";

import { CopyrightIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-1 mt-auto mb-0 py-4">
      <CopyrightIcon size={12} />
      <p className="subtext !leading-none ">
        {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
