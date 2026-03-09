"use client";
import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { navBarData } from "../data/navbar";
import { CgClose } from "react-icons/cg";

export default function NavBar() {
  const [shouldShowMobileMenu, setShouldShowMobileMenu] =
    useState<boolean>(false); //DRY but i am lazy, life is too short

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [activeNavElement, setActiveNavElemenet] = useState<string>("");
  const updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const ChangeScrollTo = (to: string) => {
    const top = document.getElementById(`${to}`)?.offsetTop;
    setShouldShowMobileMenu(false);
    window.scrollTo({
      behavior: "smooth",
      top: to !== "home" ? top! - 60 : 0,
    });
  };

  return (
    <div
      className={` py-6 px-6 transition-all duration-1000 ease-in-out  w-full flex items-center justify-between  fixed z-50 top-0 left-0 right-0 ${
        scrollPosition < 70 ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="flex space-x-2">
        <p
          onClick={() => {
            ChangeScrollTo("home");
            setActiveNavElemenet("home");
          }}
          className={`text-xl font-bold cursor-pointer ${
            scrollPosition < 70 ? "text-white" : "text-black"
          } `}
        >
          Spider technologies
        </p>
      </div>
      <div className="md:flex hidden space-x-15">
        {
          navBarData.map((nd, index) => {
            return (
              <div className="group cursor-pointer" key={index}>
          <p
            className={`rounded-md font-bold  ${
              scrollPosition < 70 ? "text-white" : "text-black"
            }`}
            onClick={() => {
              ChangeScrollTo(nd.value);
              setActiveNavElemenet(nd.value);
            }}
          >
            {nd.name}
          </p>
          {activeNavElement !== nd.value && (
            <p className="h-1 w-0 group-hover:w-full transition-all duration-200 ease-in-out bg-blue-400"></p>
          )}
          {activeNavElement === nd.value && (
            <p className="h-1 w-full group-hover:w-full transition-all duration-200 ease-in-out bg-blue-400"></p>
          )}
        </div>
            )
          })
        }
        
      </div>
      <div className="md:hidden block">
        <HiOutlineBars3BottomRight
          onClick={() => {
            setShouldShowMobileMenu(!shouldShowMobileMenu);
          }}
          className={`cursor-pointer w-7 h-7  ${
            scrollPosition < 70 ? "text-black" : "text-black"
          }`}
        />
      </div>
      {shouldShowMobileMenu && (
        <div className="absolute md:hidden h-screen flex flex-col space-y-2 left-0 right-0 z-60  bg-white w-full shadow-lg top-0 py-12 ">
          <CgClose className="w-15 h-15 p-3 absolute top-1 right-3 text-black cursor-pointer" onClick={() => {setShouldShowMobileMenu(false)}}/>
          <p
            className={`py-3 px-6 w-full cursor-pointer  ${activeNavElement === "aboutme" ? "bg-blue-400  text-white" : "hover:bg-gray-200"}`}
            onClick={() => {
              ChangeScrollTo("aboutme");
              setActiveNavElemenet("aboutme");
            }}
          >
            About Me
          </p>

          <p
            className={`py-3 px-6 w-full cursor-pointer ${activeNavElement === "skills" ? "bg-blue-400  text-white" : "hover:bg-gray-200"} `}
            onClick={() => {
              ChangeScrollTo("skills");
              setActiveNavElemenet("skills");
            }}
          >
            Skills
          </p>

          <p
            className={`py-3 px-6 w-full cursor-pointer ${activeNavElement === "works" ? "bg-blue-400  text-white" : "hover:bg-gray-200"} `}
            onClick={() => {
              ChangeScrollTo("works");
              setActiveNavElemenet("works");
            }}
          >
            Works
          </p>

          <p
            className={`py-3 px-6 w-full cursor-pointer ${activeNavElement === "certs" ? "bg-blue-400  text-white" : "hover:bg-gray-200"} `}
            onClick={() => {
              ChangeScrollTo("certificates");
              setActiveNavElemenet("certificates");
            }}
          >
            Certificates
          </p>

          <p
            className={`py-3 px-6 w-full cursor-pointer ${activeNavElement === "contact" ? "bg-blue-400  text-white" : "hover:bg-gray-200"} `}
            onClick={() => {
              ChangeScrollTo("contact");
              setActiveNavElemenet("contact");
            }}
          >
            Contact Me
          </p>
        </div>
      )}
    </div>
  );
}
