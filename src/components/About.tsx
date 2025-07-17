"use client";
/* eslint-disable react/no-unescaped-entities */
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/pfp.png",
    "/images/setup.jpg",
    "/images/pfp3.jpeg",
    "/images/cr7.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hi, I'm Ashif a recent computer science graduate with a strong
          interest in full-stack development, especially within the MERN and
          Next.js ecosystems. I'm passionate about building modern, scalable web
          applications and enjoy working with technologies like Docker and
          Firebase to streamline development workflows.
        </Paragraph>
        <Paragraph className=" mt-4">
          Lately, I’ve been diving into the world of Web3 development, and I
          find the intersection of blockchain and frontend engineering
          particularly exciting. Outside of coding, I’m a football enthusiast
          and a loyal Manchester United supporter. I also enjoy gaming it’s
          where I unwind and draw inspiration for creativity.
        </Paragraph>

        <Paragraph className=" mt-4">
          Beyond the screen, I’m a huge football enthusiast and a loyal
          Manchester United supporter. Whether it’s analyzing matches or
          casually playing with friends, football has always been a big part of
          my life. I also enjoy gaming it helps me unwind and often sparks
          creative problem-solving ideas, which I carry back into my coding.
        </Paragraph>
        <Paragraph className=" mt-4">
          I’m someone who thrives on continuous learning and building things
          from the ground up. I believe in writing clean, maintainable code and
          love collaborating with others who share a passion for tech. Whether
          it's debugging a tricky backend issue or polishing the UI to
          perfection, I enjoy every part of the development journey.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can't wait to embark on this adventure
          with you.
        </Paragraph>
      </div>
    </div>
  );
}
