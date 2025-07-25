import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "React",
      src: "/images/logos/React.png",

      className: "h-10 w-14",
    },
    {
      title: "Typescript",
      src: "/images/logos/TypeScript.png",

      className: "h-10 w-14",
    },
    {
      title: "Socket.io",
      src: "/images/logos/Socket.io.png",

      className: "h-10 w-14",
    },
    {
      title: "Redis",
      src: "/images/logos/Redis.png",

      className: "h-10 w-14",
    },
    {
      title: "Postgres SQL",
      src: "/images/logos/PostgresSQL.png",

      className: "h-10 w-14",
    },
    {
      title: "NPM",
      src: "/images/logos/NPM.png",

      className: "h-10 w-14",
    },
    {
      title: "Mongo DB",
      src: "/images/logos/MongoDB.png",

      className: "h-10 w-14",
    },
    {
      title: "Express js",
      src: "/images/logos/Express.png",

      className: "h-10 w-14",
    },
    {
      title: "Cloudflare",
      src: "/images/logos/Cloudflare.png",

      className: "h-10 w-14",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/AWS.png",

      className: "h-10 w-10",
    },

    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
