import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello!<br/>
            My name is {' '}
            <span className=" text-[#A491FF]">{personalData.name}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[#A491FF] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[#A491FF] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-[#A491FF] hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#957eb4] to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>GET RESUME</span>
              <MdDownload size={16} />
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#957eb4] to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.coverLetter}
            >
              <span>GET COVER LETTER</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0e0b0f]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#957eb4] to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-[#A491FF]"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-[#957eb4]">const</span>
                <span className="mr-2 text-white">programmer</span>
                <span className="mr-2 text-[#957eb4]">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">nickname:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-[#A491FF]">Cocoy</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">hardSkills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-[#A491FF]">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">C</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">SQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">R</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">Dart</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">JavaScipt</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">MariaDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">Firebase</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">PostgreSQL</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">softSkills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-[#A491FF]">Leadership</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">Teamwork</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">Communication</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#A491FF]">Adaptability</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-[#A491FF]">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-[#A491FF]">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;