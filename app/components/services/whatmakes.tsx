import Image from "next/image";
export default function WhatMakes() {
  return (
    <div className=" md:pb-15 py-5 bg-sky-100">
      <div className=" lg:max-w-6xl xl:max-w-350 mx-auto">
        <div className="text-center md:max-w-5xl py-10 md:mx-auto w-full md:px-0 px-3">
          <div className="text-center md:w-3/4 w-full">
            <div className="md:border-l-8 md:my-7 md:border-blue-700 md:pl-5 text-center">
              <p className="font-semibold md:text-justify text-3xl mb-2">
                What makes our web solutions stand out.
              </p>
              <p className=" md:text-justify text-xl">
                We belive in innovation, transparancy and long-term
                partnerships. Every project is treated as an opportunity to make
                an impact. - not just deliver a webiste.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:px-0 px-3">
          <div className="h-75 bg-white md:rounded-lg p-5 md:shadow-lg shadow-md text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={`/what makes/planning.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-2xl">Strategic Planning.</p>
              <p>
                We begin by undrestainding your business goals, trget audineces
                and competition.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:rounded-lg p-5 md:shadow-lg shadow-md text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={`/what makes/front-end-programming.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-2xl">Design excellence.</p>
              <p>
                Every layout, image and color scheme is chosen to resonate with
                your audinece.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:rounded-lg p-5 md:shadow-lg shadow-md text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={`/what makes/function.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-2xl">Seamless functionality</p>
              <p>
                We focus on performance, security and scaliablity to ensure your
                webiste runs smoothly.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:rounded-lg p-5 md:shadow-lg shadow-md text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={`/what makes/mobile.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-2xl">Continous suppoprt.</p>
              <p>
                From maintencance to updates, we stand by you even after project
                delivery. Our motto is simple Your success is our success.
              </p>
            </div>
          </div>

          <div className="h-75 bg-white md:rounded-lg p-5 md:shadow-lg shadow-md text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center">
              <Image
                src={`/what makes/customer-service-agent.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-2xl">Dedicated local support.</p>
              <p>
                {" "}
                We are based in Ethiopian, so you can always rely on quick
                communication and on-ground assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
