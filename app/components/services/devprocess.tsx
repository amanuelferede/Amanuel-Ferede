import Image from "next/image";
export default function OurDevelopmentProcess() {
  return (
    <div className="py-5 lg:max-w-6xl xl:max-w-350 mx-auto ">
      <div className="text-center md:max-w-5xl py-10 md:mx-auto w-full md:px-0 px-3">
        <div className="text-center md:w-3/4 w-full">
          <div className="border-l-8 md:border-l-sky-700 md:pl-5">
            <p className="font-semibold md:text-justify text-3xl mb-2">
              Our development process.
            </p>
            <p className=" md:text-justify text-xl">
              Our proven 5 tep developmenet process ensures transparency, timely
              delivery and exceptional resutls. .
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-0 px-3 grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-5 w-full">
        <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/process/research.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-2xl text-sky-800">
              Consultation and research..
            </p>
            <p>We understand your goals, target audience and competition..</p>
          </div>
        </div>
        <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/process/web-design.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-2xl text-sky-800">
              Design and prototyping.
            </p>
            <p>Our U/Ux team creates a blueprint and visual mockup</p>
          </div>
        </div>
        <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/process/software-development.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-2xl text-sky-800">Development</p>
            <p>We brging the design to life with clean and efficient code..</p>
          </div>
        </div>
        <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/process/testing.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-2xl text-sky-800">
              Testing and quality assurance.
            </p>
            <p>We regourously test for bugs, spped and responsivness.</p>
          </div>
        </div>

        <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out  p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/process/startup.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-2xl text-sky-800">
              Lanuch and support.
            </p>
            <p>
              After developmenet, we monitor performance, and offfer ongoing
              support..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
