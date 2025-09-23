import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const Experience = () => {
  return (
    <div id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-30 px-10" />

      <div className="mt-18 p-6">
        <div>
          <h2 className="font-bold text-2xl text-black">Work Experience</h2>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Software Engineering Intern
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Teck Tykes
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2025
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Full-Stack Lead Developer
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                TechStartup Club
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2024
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Software Engineering Intern
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                KeelWorks Foundation
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2024
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Software Engineering Intern
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                CodeDay Labs
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2024
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Software Engineering Intern
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Computing for All
              </Button>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between grid mt-8">
            <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
              2023
            </span>

            <div className="flex-center">
              <h1 className="text-gray-500 max-sm:hidden">
                Student
              </h1>
              <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                <Star />
                Algoverse Software Engineering Bootcamp
              </Button>
            </div>
          </div>
        </div>

        <div className="text-wrap prose border p-2 mt-14 rounded-sm shadow-sm">
          <Star className="text-[#3B82F6] mb-2" />
          <span className="bg-[#EEF4FF] text-[#3B82F6]">
            As a Computer Science student at UW, I've gained valuable experience through 
            multiple software engineering internships and leadership roles. I'm passionate 
            about technology and its potential to change lives for the better.
            <br />
            I&apos;m actively seeking opportunities to gain hands-on experience,
            contribute to meaningful products, and grow professionally.{" "}
            <span className="text-gray-700">
              If you&apos;re looking for someone hungry to learn and build —
              let&apos;s connect.
            </span>
          </span>
        </div>
      </div>

      <hr className="mt-20" />
    </div>
  );
};

export default Experience;
