import {
  Globe,
  GitBranch,
  Terminal,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Building,
} from "lucide-react";
import Triangle from "../../public/triangle.png";
import CodeEx from "../../public/code-ex1.png";
import Code2 from "../../public/code2.png";
import Conformance from "../../public/conformance.png";
import Rollback from "../../public/rollbacks.png";
import Image from "next/image";
import { Analytics } from "./analytics";

export const GridBox = () => {
  return (
    <div className="pl-60 justify-center relative mt-8">
      <div className="w-5xl h-[100vh] bg-black border border-neutral-800 relative">
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 9 }).map((_, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`absolute w-full h-px bg-neutral-900 ${
                rowIndex > 1 && rowIndex < 5 ? "opacity-0" : ""
              }`}
              style={{
                top: `${(rowIndex / 8) * 100}%`,
              }}
            ></div>
          ))}

          {Array.from({ length: 13 }).map((_, colIndex) => (
            <div
              key={`col-${colIndex}`}
              className="absolute h-full w-px bg-neutral-900"
              style={{
                left: `${(colIndex / 12) * 100}%`,
                clipPath:
                  colIndex > 1 && colIndex < 11
                    ? `polygon(0 0, 100% 0, 100% ${(1 / 8) * 100}%, 0 ${
                        (1 / 8) * 100
                      }%, 0 ${(5 / 8) * 100}%, 100% ${
                        (5 / 8) * 100
                      }%, 100% 100%, 0 100%)`
                    : "none",
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center mt-40">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Your complete platform for the web.
          </h1>
          <p className="text-lg text-neutral-400 text-center mb-8">
            Vercel provides the developer tools and cloud infrastructure
            <br /> to build, scale, and secure a faster, more personalized web.
          </p>

          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              <span className="mr-2">▲</span> Start Deploying
            </button>
            <button className="bg-black text-white px-14 py-3 rounded-full font-medium border border-neutral-800 hover:bg-neutral-900 transition-colors">
              Get a demo
            </button>
          </div>

          <div className="flex justify-center w-full mt-8">
            <Image
              src={Triangle}
              alt="Pyramid"
              className="w-[1025px] h-[420px] object-cover"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-5xl h-[30vh] bg-black border border-neutral-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
            Develop with your favorite tools
            <Terminal className="inline-block w-6 h-6 ml-2" />
          </h2>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
            Launch globally, instantly
            <Globe className="inline-block w-6 h-6 mx-2" />
            Keep pushing
            <GitBranch className="inline-block w-6 h-6 ml-2" />
          </h2>
        </div>
      </div>
      <div className="w-5xl h-[2vh] bg-black border border-neutral-800 flex items-center justify-center"></div>
      <div className="w-5xl h-[70vh] bg-black border border-neutral-800 flex relative">
        {/* Left Section with Text and Icon */}
        <div className="flex-1 flex flex-col items-start justify-start p-9 relative">
          {/* Icon + Text */}
          <span className="flex items-center text-neutral-700 text-medium">
            <Terminal className="mr-2" /> Git-connected Deploys
          </span>

          {/* Descriptive Text */}
          <h5 className="text-white text-xl mt-3">
            From localhost to https, in seconds.
          </h5>
          <h5 className="text-neutral-600 text-xl">
            Deploy from Git or your CLI.
          </h5>

          <div className="w-full mt-5">
            <Image
              src={CodeEx}
              alt="Code Example"
              className="w-full object-contain"
            />
          </div>

          {/* Vertical Divider */}
          <div className="absolute top-0 right-0 h-full w-px bg-neutral-800"></div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start justify-start p-9 relative">
          {/* Icon + Title */}
          <span className="flex items-center text-neutral-700 text-medium">
            <MessageCircle className="mr-2" /> Collaborative pre-production
          </span>

          {/* Main Text with Highlighted Section */}
          <h5 className="text-white text-xl mt-3">
            Every deploy is remarkable.
            <span className="text-neutral-600">
              {" "}
              Chat with your team on real, production-grade UI, not just
              designs.
            </span>
          </h5>
          <div className="w-full mt-5">
            <Image
              src={Code2}
              alt="Code Example"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-5xl h-[60vh] bg-black border border-neutral-800 rounded-md overflow-hidden">
        <Analytics />
      </div>
      <div className="w-5xl h-[70vh] bg-black border border-neutral-800 flex relative">
        {/* Left Section with Text and Icon */}
        <div className="flex-1 flex flex-col items-start justify-start p-9 relative">
          {/* Icon + Text */}
          <span className="flex items-center text-neutral-700 text-medium">
            <RotateCcw className="mr-2" /> Instant Rollbacks
          </span>

          {/* Descriptive Text */}
          <h5 className="text-white text-xl mt-3">
            Go ahead, deploy on Friday.
            <span className="text-neutral-600">
              {" "}
              Instantly <br />
              rollback to a working deployment.
            </span>
          </h5>

          <div className="w-full mt-5">
            <Image
              src={Rollback}
              alt="Code Example"
              className="w-full object-contain"
            />
          </div>

          {/* Vertical Divider */}
          <div className="absolute top-0 right-0 h-full w-px bg-neutral-800"></div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start justify-start p-9 relative">
          {/* Icon + Title */}
          <span className="flex items-center text-neutral-700 text-medium">
            <MessageCircle className="mr-2" /> Conformance
          </span>

          {/* Main Text with Highlighted Section */}
          <h5 className="text-white text-xl mt-3">
            Move fast, don’t break things.
            <span className="text-neutral-600">
              {" "}
              Keep <br /> quality high while maintaining velocity with
              Enterprise Monorepos.
            </span>
          </h5>
          <div className="w-full mt-5">
            <Image
              src={Conformance}
              alt="Code Example"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-5xl h-[13vh] bg-black border border-neutral-800 flex items-center justify-center text-white text-lg">
        Scale your <span className="mx-2"></span>
        <button className="flex items-center bg-black border border-neutral-700 px-4 py-2 rounded-full text-white text-sm hover:bg-neutral-900 transition">
          <Building size={16} className="mr-2" /> Enterprise
        </button>
        <span className="mx-2"></span>
        without compromising
        <span className="mx-2"></span>
        <button className="flex items-center bg-black border border-neutral-700 px-4 py-2 rounded-full text-white text-sm hover:bg-neutral-900 transition">
          <ShieldCheck size={16} className="mr-2" /> Security
        </button>
      </div>
      <div className="w-5xl h-[30vh] bg-black border border-neutral-800 mt-8 flex items-center relative">
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full border-r border-dashed border-neutral-700"></div>

          <div className="w-1/3 h-full border-r border-dashed border-neutral-700"></div>

          <div className="w-1/3 h-full"></div>
        </div>
        <div className="absolute w-2/3 pl-8 text-white">
          <h2 className="text-xl font-semibold">
            <span className="font-bold text-white">Ready to deploy?</span>
            <span className="text-neutral-400 font-medium">
              {" "}
              Start building with a free account. <br /> Speak to an expert for
              your <span className="text-blue-400">Pro</span> or{" "}
              <span className="text-pink-400">Enterprise</span> needs.
            </span>
          </h2>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="px-5 py-2 border border-neutral-700 rounded-full text-black bg-white hover:bg-gray-200 transition">
              Start Deploying
            </button>
            <button className="px-5 py-2 border border-neutral-700 rounded-full text-white bg-black hover:bg-neutral-900 transition">
              Talk to an Expert
            </button>
          </div>
        </div>

        <div className="absolute w-1/3 right-0 pl-8 text-white ">
          <h2 className="text-medium font-normal">
            <span className="text-medium font-normal">
              Explore Vercel Enterprise
            </span>
            <span className="text-neutral-400 font-medium">
              {" "}
              with an interactive product tour, trial, or a personalized demo.
            </span>
          </h2>

          <div className="mt-4">
            <button className="px-5 py-2 border border-neutral-700 rounded-full text-white bg-black hover:bg-neutral-900 transition">
              Explore Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
