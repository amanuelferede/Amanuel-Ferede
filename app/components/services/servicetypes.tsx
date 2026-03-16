"use client";
import Image from "next/image";

export default function ServiceTypes() {
  const goToServices = (serviceType: string) => {
    const element = document.getElementById(`${serviceType}`);
    window.scrollTo({
      top: element!.offsetTop - 70,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="grid md:grid-cols-3 gap-5  py-5 md:px-0 px-3 lg:max-w-6xl xl:max-w-350 mx-auto"
      id="services"
    >
      <div
        className="cursor-pointer  md:rounded-xl md:hover:-translate-y-3 transition-all duration-300 ease-in-out shadow-xl text-center flex items-center justify-center"
        onClick={() => {
          goToServices("web-dev-service");
        }}
      >
        <div className="flex flex-col space-y-2">
          <Image
            src={`/services/web dev.jpg`}
            width={0}
            height={0}
            className="w-full h-65"
            sizes="100vh"
            alt="web desgin"
          />

          <div className="p-10 pt-5 flex flex-col space-y-2">
            <p className="font-semibold text-3xl text-black">Website desgin</p>
            <p className="text-black">
              We design websites that reflect your brand&apos;s values,
              personality, and bussiness goals.
            </p>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer  md:rounded-xl md:hover:-translate-y-3 transition-all duration-300 ease-in-out shadow-xl text-center flex items-center justify-center"
        onClick={() => {
          goToServices("soft-dev-service");
        }}
      >
        <div className="flex flex-col space-y-2">
          <Image
            src={`/services/software dev.jpg`}
            width={0}
            height={0}
            className="w-full h-65"
            sizes="100vh"
            alt="web desgin"
          />

          <div className="p-10 pt-5 flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-black">
              Software development
            </p>
            <p className="text-black">
              We create intelligent digital solutions that simplify business
              operations, increase productivity and enhance customer
              engagement..
            </p>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer  md:rounded-xl md:hover:-translate-y-3 transition-all duration-300 ease-in-out shadow-xl text-center flex items-center justify-center"
        onClick={() => {
          goToServices("graphics-desgin-service");
        }}
      >
        <div className="flex flex-col space-y-2">
          <Image
            src={`/services/graphics design.jpg`}
            width={0}
            height={0}
            className="w-full h-65"
            sizes="100vh"
            alt="web desgin"
          />

          <div className="p-10 pt-5 flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-black">Graphic desgin.</p>
            <p className="text-black">
              We create intelligent digital solutions that simplify business
              operations, increase productivity and enhance customer
              engagement..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
