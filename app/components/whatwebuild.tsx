"use client";
import Image from "next/image";
import { useState } from "react";
import WorkModal from "./workmodal";
import { serviceTypes } from "../data/works";

export default function WhatWebuild() {
  const [shouldShowWorkModal, setShouldShowWorkModal] =
    useState<boolean>(false);
  const [selectedWork] = useState<{
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
    <div className="lg:max-w-7xl xl:max-w-350 mx-auto w-full py-5" id="works">
      <div className="grid md:grid-cols-3 gap-5">
        {serviceTypes.map((st, index) => {
          return (
            <div
              className="w-full md:rounded-lg relative group overflow-hidden md:shadow-md md:hover:-translate-y-2 md:transition-all md:duration-500 md:ease-in-out group cursor-pointer"
              key={index}
            >
              <Image
                src={st.coverImage}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full object-cover mb-3"
              />

              <div className="-z-10 p-4">
                <p className="text-xl font-bold font-sans mb-1 ">{st.type}</p>
                <p className="text-zinc-600 ">{st.description}</p>
              </div>
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
