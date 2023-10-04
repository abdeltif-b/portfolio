"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
// import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex flex-col content-center gap-3">
        <div className="flex items-center justify-center">
          <div className="relative">
            <Image
              src="/img/pic.jpeg"
              alt="image"
              width="200"
              height="200"
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Hello,{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              I'm Abdeltif.
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            I'm a full-stack developer with +5 years of experience. I enjoy building web apps.
          </p>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            My focus is Next.js (React / Typescript / Node.js) & FastAPI (Python).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <Button asChild>
            <Link href="#contact">Contact me</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="pdfs/cv.pdf" target="_blank">
              <FileTextIcon className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN}`} target="_blank">
              <LinkedInLogoIcon />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`${process.env.NEXT_PUBLIC_GITHUB}`} target="_blank">
              <GitHubLogoIcon />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
