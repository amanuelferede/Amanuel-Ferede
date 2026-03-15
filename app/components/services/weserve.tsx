import Image from "next/image";
export default function WeServe() {
  return (
    <div
      className="  relative"
      style={{
        backgroundImage: `url('c.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" min-h-screen md:px-0 px-3  bg-sky-800/70 md:py-25 py-15 backdrop-hue-rotate-90 h-full">
        <div className=" lg:max-w-7xl xl:max-w-350 mx-auto  ">
          <div className="grid md:grid-cols-2 gap-10 justify-center 0">
            <div
              className="md:h-1/2  md:sticky md:top-20 md:flex md:items-center md:justify-center md:p-20"
              style={{}}
            >
              <div className="text-white stiky top-20">
                <div className="text-2xl font-semibold text-center">
                  <p className="w-full md:text-3xl">
                    We stay updated with the latest trends and technologies to
                    ensrue your website is modern, secure, and optimized for the
                    best resutls.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-2 gap-6 ">
              <div className=" h-40 md:rounded-lg rounded-md bg-white/85 p-6 shadow-xl text-center flex items-center justify-center">
                <div className="flex flex-col space-y-2 items-center">
                  <Image
                    src={`/we serve/university.png`}
                    width={0}
                    height={0}
                    className="w-15 h-15"
                    sizes="100vh"
                    alt="web desgin"
                  />
                  <p className="font-semibold text-lg">Education.</p>
                </div>
              </div>
              <div className=" h-40 md:rounded-lg rounded-md bg-white/85 p-6 shadow-xl text-center flex items-center justify-center">
                <div className="flex flex-col space-y-2 items-center">
                  <Image
                    src={`/we serve/hospital.png`}
                    width={0}
                    height={0}
                    className="w-15 h-15"
                    sizes="100vh"
                    alt="web desgin"
                  />
                  <p className="font-semibold text-lg">Healthcare.</p>
                </div>
              </div>
              <div className=" h-40 md:rounded-lg rounded-md bg-white/85 p-6 shadow-xl text-center flex items-center justify-center">
                <div className="flex flex-col space-y-2 items-center">
                  <Image
                    src={`/we serve/building.png`}
                    width={0}
                    height={0}
                    className="w-15 h-15"
                    sizes="100vh"
                    alt="web desgin"
                  />
                  <p className="font-semibold text-lg">Real state</p>
                </div>
              </div>
              <div className=" h-40 md:rounded-lg rounded-md bg-white/85 p-6 shadow-xl text-center flex items-center justify-center">
                <div className="flex flex-col space-y-2 items-center">
                  <Image
                    src={`/we serve/online-shopping.png`}
                    width={0}
                    height={0}
                    className="w-15 h-15"
                    sizes="100vh"
                    alt="web desgin"
                  />
                  <p className="font-semibold text-lg">E-commerce.</p>
                </div>
              </div>

              <div className=" h-40 md:rounded-lg rounded-md bg-white/85 p-6 shadow-xl text-center flex items-center justify-center">
                <div className="flex flex-col space-y-2 items-center">
                  <Image
                    src={`/we serve/business-trip.png`}
                    width={0}
                    height={0}
                    className="w-15 h-15"
                    sizes="100vh"
                    alt="web desgin"
                  />
                  <p className="font-semibold text-lg">Travel and tourism.</p>
                </div>
              </div>
              <div className=" h-40 md:rounded-lg rounded-md bg-white/85 p-6 shadow-xl text-center flex items-center justify-center">
                <div className="flex flex-col space-y-2 items-center">
                  <Image
                    src={`/we serve/ngo.png`}
                    width={0}
                    height={0}
                    className="w-15 h-15"
                    sizes="100vh"
                    alt="web desgin"
                  />
                  <p className="font-semibold text-lg">
                    NGO and government projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
