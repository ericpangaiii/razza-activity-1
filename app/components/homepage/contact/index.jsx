import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import Image from 'next/image';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />


      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1D1B50]"></span>
          <span className="bg-[#1D1B50] w-fit text-white p-2 px-5 text-xl rounded-md">
            CONTACT ME
          </span>
          <span className="w-24 h-[2px] bg-[#1D1B50]"></span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Contact Information */}
            <div className="bg-[#0D1224] rounded-lg p-8 border border-[#1D1B50]">
              <h3 className="text-2xl font-semibold mb-6 text-[#A491FF]">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                  <div className="bg-[#A491FF] p-3 rounded-full hover:scale-110 transition-all duration-300 text-gray-800">
                    <MdAlternateEmail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">{personalData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                  <div className="bg-[#A491FF] p-3 rounded-full hover:scale-110 transition-all duration-300 text-gray-800">
                    <IoMdCall size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">{personalData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                  <div className="bg-[#A491FF] p-3 rounded-full hover:scale-110 transition-all duration-300 text-gray-800">
                    <CiLocationOn size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#0D1224] rounded-lg p-8 border border-[#1D1B50]">
              <h3 className="text-2xl font-semibold mb-6 text-[#A491FF]">Connect With Me</h3>
              <div className="flex flex-col gap-6">
                <Link target="_blank" href={personalData.github} className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                  <div className="bg-[#A491FF] p-3 rounded-full hover:scale-110 transition-all duration-300 text-gray-800">
                    <IoLogoGithub size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white">@ericpangaiii</p>
                  </div>
                </Link>
                <Link target="_blank" href={personalData.linkedIn} className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                  <div className="bg-[#A491FF] p-3 rounded-full hover:scale-110 transition-all duration-300 text-gray-800">
                    <BiLogoLinkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white">Eric Conrad Panga</p>
                  </div>
                </Link>
                <Link target="_blank" href={personalData.facebook} className="flex items-center gap-4 hover:translate-x-2 transition-all duration-300">
                  <div className="bg-[#A491FF] p-3 rounded-full hover:scale-110 transition-all duration-300 text-gray-800">
                    <FaFacebook size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Facebook</p>
                    <p className="text-white">Eric Conrad Panga</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;