"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <div className="">
          <div className="font-bold text-3xl text-black/90">About</div>
          <p>
            I'm Abdulrahman Elmi, a passionate Computer Science student at the University of Washington 
            and an aspiring Software Engineer with multiple internship experiences and a strong drive for 
            building impactful technology solutions.
          </p>

          <p className="mt-2">
            I'm a fan of technology, I know its power and potential to greatly change our life for the better and I want to be a part of that change.
            I play multiple sports and my favorite ones are basketball and soccer. I also speak 3 languages: 
            Arabic, Somali, and English, and I'm currently learning Spanish and Japanese.
          </p>
          
          <ul className="list-disc mt-3 text-gray-700">
            <li>Multiple software engineering internships</li>
            <li>Proficient in Python, Java, JavaScript, React, Node.js, and more</li>
            <li>Exposure to Machine Learning, AI, and cloud platforms</li>
            <li>Multilingual: Arabic, Somali, English (learning Spanish & Japanese)</li>
          </ul>
        </div>
      </div>

      <Link
        href="https://www.linkedin.com/in/abdulrahman-elmi-1813061ba/"
        target="_blank"
      >
        <div className="flex justify-center mt-10 px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
          >
            <Image
              src="/img/MeAtAMC.jpeg"
              width={200}
              height={200}
              alt="Abdulrahman Elmi profile image"
              className="rounded-sm bg-white w-full max-w-[200px]"
            />
            <span className="text-sm block text-center mt-1 text-gray-800">
              @abdulrahman-elmi
            </span>
          </motion.div>
        </div>
      </Link>

      <div className="flex justify-center mt-6 px-4">
        <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
          <a href="#contact" aria-label="Contact for collaboration">
            Let&apos;s collaborate!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default About;
