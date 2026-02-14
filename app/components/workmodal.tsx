"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type Settings } from "react-slick";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
export default function WorkModal({
  work,
  shouldShowWorkModal,
  onCloseModal,
}: {
  shouldShowWorkModal: boolean;
  work: {
    title: string;
    techs: string;
    bImage: string;
    desk: string;
    Images: string[];
    url: string;
  };
  onCloseModal: () => void;
}) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef<Slider>(null); // Type the ref as Slider or null
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldShowWorkModal) {
      modalRef.current!.style.transform = "scale(1)";
      modalRef.current!.style.opacity = "1";
    } else {
      modalRef.current!.style.transform = "scale(0.2)";
      modalRef.current!.style.opacity = "0";
    }
  }, [shouldShowWorkModal]);
  return (
    <div className={` fixed top-0 left-0 right-0 bottom-0 z-60 bg-black/50 `}>
      <div
        className={`max-w-2xl transition-transform duration-300 ease-in-out rounded-xl bg-white mx-auto mt-5
          
        `}
        ref={modalRef}
        style={{ transform: "scale(0.2)", opacity: 0 }}
      >
        <div className="sticky w-full rounded-tl-xl rounded-tr-xl top-0 left-0 right-0 px-5 py-3.5 bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold font-sans">{work.title}</p>
            <CgClose
              className="cursor-pointer p-2 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={onCloseModal}
            />
          </div>
        </div>

        <div className="max-h-105 overflow-y-auto overflow-x-hidden py-5 px-4">
          <p>Using {work.techs}</p>

          <p className="mb-4">{work.desk}</p>
          <div className="relative">
            <div
              className="w-11 h-11 cursor-pointer p-2 rounded-full bg-gray-600 transition-all duration-400 ease-in-out hover:bg-gray-900 hover:-translate-x-2 absolute z-10 left-1 top-1/2"
              onClick={() => {
                sliderRef.current?.slickPrev();
              }}
            >
              <IoIosArrowBack className="w-full h-full text-white" />
            </div>

            <div
              className="w-11 h-11 cursor-pointer p-2 rounded-full bg-gray-600 transition-all duration-400 ease-in-out hover:bg-gray-900 hover:translate-x-2 absolute z-10 right-1 top-1/2"
              onClick={() => {
                sliderRef.current?.slickNext();
              }}
            >
              <IoIosArrowForward className="w-full h-full text-white" />
            </div>
            <Slider {...settings} ref={sliderRef}>
              {work.Images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    alt="xxx"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full object-cover"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-full shadow-sm sticky bottom-0 left-0 right-0 py-2 pb-5 px-5 pl-3 ">
          <div className="flex space-x-8">
            <Link
              href={work.url}
              className="block cursor-pointer py-1 px-4 rounded-md text-white bg-pink-600"
            >
              Live demo
            </Link>
            <button
              className="block cursor-pointer px-4 py-1 rounded-md border-2 border-pink-600"
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
