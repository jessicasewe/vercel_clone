"use client";

import Link from "next/link";
import {
  ChevronDown,
  Globe,
  Shield,
  Cpu,
  Box,
  Sparkles,
  Store,
  ChartLine,
  AppWindowMac,
  Command,
  Wrench,
  BookOpen,
  Smile,
  Compass,
  Puzzle,
  MessageSquare,
  Phone,
  PenTool,
  Notebook,
  PanelsTopLeft,
  BriefcaseBusiness,
  ChartNoAxesColumn,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import vercel from "../../public/vercel-logotype-dark.png";
import next from "../../public/next.png";
import turbo from "../../public/turbo.png";
import turboo from "../../public/turboo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [hoverStyles, setHoverStyles] = useState<{
    opacity: number;
    left: number;
    width: number;
    height: number;
    top: number;
    transform?: string;
  }>({
    opacity: 0,
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  });

  const navRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(turbo);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabHover = (e: any) => {
    if (!e) {
      setActiveTab(null);
      setHoverStyles((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();

    setActiveTab(target.dataset.tab);
    setHoverStyles({
      opacity: 1,
      left: rect.left - navRect.left,
      width: rect.width,
      height: rect.height,
      top: rect.top - navRect.top,
      transform: "translateY(0)",
    });
  };

  return (
    <header className="bg-black fixed top-0 w-full z-50">
      {/* Border element */}
      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-neutral-800 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <nav
            className="hidden md:flex items-center space-x-5 relative"
            ref={navRef}
          >
            <div className="ml-11">
              <Image
                src={vercel || "/placeholder.svg"}
                alt="vercel logo"
                width={90}
              />
            </div>

            {/* Hover background element */}
            <div
              ref={backgroundRef}
              className="absolute bg-neutral-800 rounded-full transition-all duration-300 ease-out z-0"
              style={{
                opacity: hoverStyles.opacity,
                left: hoverStyles.left,
                width: hoverStyles.width,
                height: hoverStyles.height,
                top: hoverStyles.top,
                pointerEvents: "none",
              }}
            />

            {/* Products Dropdown */}
            <div
              className="group relative px-0.5 py-1 rounded-full transition-all duration-300 z-10"
              data-tab="products"
              onMouseEnter={handleTabHover}
              onMouseLeave={() => handleTabHover(null)}
            >
              <div className="flex items-center ml-5">
                <Link
                  href="#"
                  className="text-sm font-light text-neutral-400 group-hover:text-white font-sans relative"
                >
                  Products
                  <span className="absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <ChevronDown className="h-3 w-3 ml-1 text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
              </div>

              <div className="absolute left-0 top-full mt-4 w-[950px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="relative">
                  <div className="absolute top-0 left-[70px] -translate-y-2 w-4 h-4 bg-black rotate-45 border-t border-l border-neutral-800"></div>
                  <div className="relative bg-black border border-neutral-800 rounded-lg p-6 shadow-xl overflow-hidden">
                    <div className="grid grid-cols-3 gap-6 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      {/* DX Platform */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          DX Platform
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <PanelsTopLeft className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Previews
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Helping teams ship 6x faster
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Sparkles className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                AI
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Powering breakthroughs
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Managed Infrastructure */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          Managed Infrastructure
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Cpu className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Fluid compute
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Servers, in serverless form
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Globe className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Rendering
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Fast, scalable, and reliable
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <ChartNoAxesColumn className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Observability
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Trace every step
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Shield className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Security
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Scale without compromising
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Open Source */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          Open Source
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Image src={next} alt="Next.js" width={20} />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Next.js
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                The native Next.js platform
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                            onMouseEnter={() => setImageSrc(turboo)}
                            onMouseLeave={() => setImageSrc(turbo)}
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Image
                                src={imageSrc}
                                alt="turbo.js"
                                width={20}
                                height={20}
                              />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Turborepo
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Speed with Enterprise scale
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Box className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                AI SDK
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                The AI Toolkit for TypeScript
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="group relative p-1 rounded-full px-1 py-1 transition-all duration-300 z-10"
              data-tab="solutions"
              onMouseEnter={handleTabHover}
              onMouseLeave={() => handleTabHover(null)}
            >
              <div className="flex items-center">
                <Link
                  href="#"
                  className="text-sm font-light text-neutral-400 group-hover:text-white font-sans relative"
                >
                  Solutions
                  <span className="absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <ChevronDown className="h-4 w-4 ml-1 text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
              </div>

              <div className="absolute left-0 top-full mt-1 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="relative">
                  <div className="absolute top-0 left-[70px] -translate-y-2 w-4 h-4 bg-black rotate-45 border-t border-l border-neutral-800"></div>
                  <div className="relative bg-black border border-neutral-800 rounded-lg p-6 shadow-xl overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 translate-x-5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      {/* Enterprise */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          Use Cases
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Sparkles className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                AI Apps
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Deploy at the speed of AI
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <ChartLine className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Composable Commerce
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Power storefronts that convert
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Store className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Marketing Sites
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Launch campaigns fast
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Command className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Multi-tenant Platforms
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Scale apps with one codebase
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <AppWindowMac className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Web Apps
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Ship Features, not Infrastructure
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Industries */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          Users
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Wrench className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Platform Engineers
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Automate away repitition
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <AppWindowMac className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Design Engineers
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Deploy for every idea
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="group relative px-1 py-1 rounded-full transition-all duration-300 z-10"
              data-tab="resources"
              onMouseEnter={handleTabHover}
              onMouseLeave={() => handleTabHover(null)}
            >
              <div className="flex items-center">
                <Link
                  href="#"
                  className="text-sm font-light text-neutral-400 group-hover:text-white font-sans relative"
                >
                  Resources
                  <span className="absolute bottom-0 left-0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <ChevronDown className="h-4 w-4 ml-1 text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
              </div>

              <div className="absolute left-0 top-full mt-1 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="relative">
                  <div className="absolute top-0 left-[70px] -translate-y-2 w-4 h-4 bg-black rotate-45 border-t border-l border-neutral-800"></div>
                  <div className="relative bg-black border border-neutral-800 rounded-lg p-6 shadow-xl overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 translate-x-5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      {/* Documentation */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          Tools
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Box className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Resource Center
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Today's best practices
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Puzzle className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Marketplace
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Extend and automate workplace
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <AppWindowMac className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Templates
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Jumpstart app development
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <BookOpen className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Guides
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Find help quickly
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Compass className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Partner Finder
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Get help from solution partners
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Support */}
                      <div>
                        <h3 className="text-neutral-400 text-sm font-medium mb-4">
                          Company
                        </h3>
                        <div className="space-y-4">
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Smile className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Customers
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Trusted by the best teams
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <PenTool className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Blog
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                The latest posts and changes
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <Notebook className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Changelog
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                See what shipped
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="flex items-start gap-3 group/item p-2 rounded-lg transition-colors"
                          >
                            <div className="p-2 border border-neutral-800 rounded-lg group-hover/item:border-neutral-700 transition-colors group-hover/item:bg-gray-300">
                              <BriefcaseBusiness className="h-5 w-5 text-white group-hover/item:text-black transition-colors" />
                            </div>
                            <div>
                              <p className="text-gray-300 text-sm font-medium group-hover/item:text-gray-300 transition-colors">
                                Press
                              </p>
                              <p className="text-neutral-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors">
                                Read the latest news
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add a small gap between Enterprise, Docs, and Pricing */}
            <div className="flex items-center space-x-1">
              <Link
                href="#"
                className="text-sm font-light text-neutral-400 hover:text-white font-sans rounded-full px-2.5 py-1.5 relative z-10"
                data-tab="enterprise"
                onMouseEnter={handleTabHover}
                onMouseLeave={() => handleTabHover(null)}
              >
                Enterprise
                <span className="absolute bottom-0 left-0 w-full transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
              </Link>

              <Link
                href="#"
                className="text-sm font-light text-neutral-400 hover:text-white font-sans rounded-full px-2.5 py-1.5 relative z-10"
                data-tab="docs"
                onMouseEnter={handleTabHover}
                onMouseLeave={() => handleTabHover(null)}
              >
                Docs
                <span className="absolute bottom-0 left-0 w-full transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
              </Link>

              <Link
                href="#"
                className="text-sm font-light text-neutral-400 hover:text-white font-sans rounded-full px-2.5 py-1.5 z-10"
                data-tab="pricing"
                onMouseEnter={handleTabHover}
                onMouseLeave={() => handleTabHover(null)}
              >
                Pricing
              </Link>
            </div>
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="text-sm font-medium text-white px-2.5  py-1 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors font-sans"
          >
            Log In
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-white px-2.5 py-1 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors font-sans"
          >
            Contact
          </Link>

          <Link
            href="#"
            className="text-sm font-medium bg-white text-black px-2 py-1.5 rounded-md hover:bg-gray-200 transition-colors mr-12 font-sans"
          >
            Sign Up
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4 space-y-4">
            <Link href="#" className="block text-white py-2 font-sans">
              Products
            </Link>

            <Link href="#" className="block text-white py-2 font-sans">
              Solutions
            </Link>

            <Link href="#" className="block text-white py-2 font-sans">
              Resources
            </Link>

            <Link href="#" className="block text-white py-2 font-sans">
              Enterprise
            </Link>

            <Link href="#" className="block text-white py-2 font-sans">
              Docs
            </Link>

            <Link href="#" className="block text-white py-2 font-sans">
              Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
