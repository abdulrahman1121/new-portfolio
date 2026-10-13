"use client";

import React from "react";
import { artifacts, projects } from "../../_data/data";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="font-body">
      <div className="mt-10 py-2 px-1 grid font-bold md:text-3xl text-3xl">
        <div className="text-center prose">
          <h1 className="font-grotesk text-[40px] max-md:text-[30px]">
            My Projects & Experience.
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8">
          {projects.map((data, index) => (
            <div key={index} className="border rounded-2xl">
              <div className="p-5">
                <div className="p-4 bg-gray-200 rounded-xl">
                  <Image
                    src={`/img/${data.img}`}
                    alt={data.name}
                    width={900}
                    height={900}
                    className="w-full object-contain overflow-hidden rounded-sm"
                  />
                </div>

                <h2 className="font-grotesk text-2xl font-semibold mt-8 tracking-[0.5px]">
                  {data.name}
                </h2>
                <p className="text-base text-wrap prose font-light text-gray-700 line-clamp-2 mt-4 flex-grow">
                  {data.desc}
                </p>
                <Link href={`/project/${data.slug}`} className="">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ x: 5 }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <Button className="!cursor-pointer mt-4 !bg-gray-200 hover:!bg-gray-200/80 space-x-3 transition-colors">
                      View Project <ArrowRightIcon />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 px-4 sm:px-6 md:px-8">
          <h2 className="font-grotesk text-3xl font-semibold">Artifacts</h2>
          <div className="mt-6 border-t border-gray-200">
            {artifacts.map((artifact) => (
              <Link
                key={artifact.slug}
                href={`/artifact/${artifact.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-gray-200 py-4"
              >
                <span className="font-grotesk text-lg font-semibold">
                  {artifact.name}
                </span>
                <span className="hidden flex-1 text-sm font-light text-gray-500 sm:block">
                  {artifact.show}
                </span>
                <ArrowRightIcon className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
