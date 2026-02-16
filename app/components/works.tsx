"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WorkModal from "./workmodal";
import { works } from "../data/works";

export default function Works() {
  const [shouldShowWorkModal, setShouldShowWorkModal] =
    useState<boolean>(false);
  const [selectedWork, setSelectedWork] = useState<{
    title: string;
    techs: string;
    bImage: string;
    desk: string;
    Images: string[];
    url: string;
  }>({
    bImage: "",
    desk: "",
    Images: [],
    techs: "",
    title: "",
    url: "",
  });

  const closeModal = () => {
    setShouldShowWorkModal(false);
  };
  return (
    <div className="max-w-6xl mx-auto w-full py-5" id="works">
      <div className="grid md:grid-cols-3 gap-5">
        {works.map((work, index) => {
          return (
            <div className="w-full md:rounded-lg relative group overflow-hidden md:shadow-md md:hover:-translate-y-2 md:transition-all md:duration-500 md:ease-in-out group cursor-pointer" key={index}>
                <div className="absolute z-10 md:flex hidden items-center space-x-4 group-hover:justify-around transition-all  justify-center h-1 opacity-0 group-hover:opacity-100 group-hover:h-100  duration-400 ease-in-out left-0 right-0 bottom-0 bg-black/55 p-4 text-white">
                  <Link target="_blank" href={work.url} title="Live demo">
                    <Image
                      src={`/works/link.png`}
                      alt="xxx"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-9 h-9 object-cover"
                    />
                  </Link>

                  <Image
                    src={`/works/info (1).png`}
                    title="View detail"
                    onClick={() => {
                      setShouldShowWorkModal(true);
                      setSelectedWork(work);
                    }}
                    alt="xxx"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-9 h-9 object-cover cursor-pointer"
                  />
                </div>
              <Image
                src={work.bImage}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full object-cover mb-3"
              />

              
                <div className="-z-10 p-4">
                  <p className="text-xl font-bold font-sans mb-1 ">
                    {work.title}
                  </p>
                  <p className="text-zinc-600 ">{work.techs}</p>
                </div>
              
            
                <Link
                  target="_blank"
                  href={work.url}
                  className="bg-blue-400 md:hidden inline-flex py-1.5 px-3 rounded-lg items-center space-x-1.5 mt-2"
                >
                  <Image
                    src={`/works/link.png`}
                    alt="xxx"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-5 h-5 object-cover"
                  />
                  <span className="text-white">Live Demo</span>
                </Link>
              </div>
 
          );
        })}
      </div>

      {shouldShowWorkModal && (
        <WorkModal
          work={selectedWork}
          onCloseModal={closeModal}
          shouldShowWorkModal={shouldShowWorkModal}
        />
      )}
    </div>
  );
}
