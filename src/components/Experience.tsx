import React from "react";
import Image from "next/image";
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
    logo: <SiAdobe className="size-6 p-0.5 text-[#FF0000]" />,
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
      width={24}
      height={24}
      className="size-6 rounded-md object-contain"
    />
  ) : (
    <span className="flex size-6 items-center justify-center rounded-md bg-[#3B82F6] text-xs font-bold text-white">
      {job.company[0]}
    </span>
  ));

const Experience = () => {
  return (
    <div id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-15 px-10" />

      <div className="mt-10 px-6">
        <div>
          <h2 className="font-bold text-2xl text-black">Work Experience</h2>

          <div className="mt-8 border-t border-gray-200">
            {jobs.map((job) => (
              <div
                key={`${job.company}-${job.year}`}
                className="flex items-center gap-3 sm:gap-4 py-4 border-b border-gray-200"
              >
                <CompanyLogo job={job} />
                <span className="font-bold text-black sm:flex-1">
                  {job.company}
                </span>
                <span className="text-sm text-gray-500 max-sm:hidden sm:flex-[1.3]">
                  {job.role}
                </span>
                <span className="text-sm text-gray-500 tabular-nums ml-auto sm:ml-0">
                  {job.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 border-l-[3px] border-[#3B82F6] py-1 pl-4 leading-relaxed text-gray-600">
          As a Computer Science student at UW, I&apos;ve gained valuable
          experience through multiple software engineering internships and
          leadership roles. I&apos;m passionate about technology and its
          potential to change lives for the better. I&apos;m actively seeking
          opportunities to gain hands-on experience, contribute to meaningful
          products, and grow professionally.{" "}
          <strong className="font-semibold text-black">
            If you&apos;re looking for someone hungry to learn and build —
            let&apos;s connect.
          </strong>
        </p>
      </div>

      <hr className="mt-12" />
    </div>
  );
};

export default Experience;
