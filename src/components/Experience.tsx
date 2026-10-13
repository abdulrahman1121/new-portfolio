import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { SiAdobe } from "react-icons/si";

type Job = {
  year: string;
  role: string;
  company: string;
  logo?: React.ReactNode;
  logoSrc?: string;
};

const jobs: Job[] = [
  {
    year: "2026",
    role: "Software Engineering Intern",
    company: "Adobe",
    logo: <SiAdobe className="size-4 text-[#FF0000]" />,
  },
  {
    year: "2025",
    role: "Software Engineering Intern",
    company: "Tech Tykes",
    logoSrc: "/logos/tech-tykes.png",
  },
  {
    year: "2025",
    role: "Full-Stack Lead Developer",
    company: "TechStartup Club",
    logoSrc: "/logos/techstartup-club.png",
  },
  {
    year: "2024",
    role: "Software Engineering Intern",
    company: "Computing for All",
    logoSrc: "/logos/computing-for-all.png",
  },
  {
    year: "2024",
    role: "Software Engineering Intern",
    company: "KeelWorks Foundation",
    logoSrc: "/logos/keelworks.png",
  },
];

// Falls back to a letter badge when a company has no logo yet.
const CompanyLogo = ({ job }: { job: Job }) =>
  job.logo ??
  (job.logoSrc ? (
    <Image
      src={job.logoSrc}
      alt={`${job.company} logo`}
      width={20}
      height={20}
      className="size-5 rounded-sm object-contain"
    />
  ) : (
    <span className="flex size-4 items-center justify-center rounded-sm bg-[#3B82F6] text-[10px] font-bold text-white">
      {job.company[0]}
    </span>
  ));

const Experience = () => {
  return (
    <div id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-30 px-10" />

      <div className="mt-18 p-6">
        <div>
          <h2 className="font-bold text-2xl text-black">Work Experience</h2>

          {jobs.map((job) => (
            <div
              key={`${job.company}-${job.year}`}
              className="md:flex md:items-center md:justify-between grid mt-8"
            >
              <span className="md:text-sm text-[13px] text-gray-500 px-2 mb-2">
                {job.year}
              </span>

              <div className="flex-center">
                <h1 className="text-gray-500 max-sm:hidden">{job.role}</h1>
                <Button className="bg-[#EEF4FF] text-[#3B82F6] ml-2">
                  <CompanyLogo job={job} />
                  {job.company}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-wrap prose border p-2 mt-14 rounded-sm shadow-sm">
          <Star className="text-[#3B82F6] mb-2" />
          <span className="bg-[#EEF4FF] text-[#3B82F6]">
            As a Computer Science student at UW, I've gained valuable experience
            through multiple software engineering internships and leadership
            roles. I'm passionate about technology and its potential to change
            lives for the better.
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
