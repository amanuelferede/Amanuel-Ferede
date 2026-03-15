import Image from "next/image";
export default function WhyChooseUs() {
  return (
    <div className=" lg:max-w-6xl xl:max-w-350 mx-auto">
      <div className="text-center md:max-w-5xl py-10 md:mx-auto w-full md:px-0 px-3">
        <div className="text-center">
          <div className="border-l-8 border-l-blue-600 pl-5  text-center inline-block">
            <p className="font-semibold mb-2 md:text-justify text-3xl">
              Why choose us.
            </p>
            <p className="md:text-justify text-xl">
              We understand that every business is unique, and so should be its
              website. Our mission is to create digital expereinces that not
              only look great but aslo perform flawlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 ">
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3  items-center">
            <Image
              src={`/why choose us/programming.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />

            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-2xl">
                Creative and proffessional design
              </p>
              <p>
                We design websites that reflect your brand&apos;s values,
                personality, and bussiness goals.
              </p>
            </div>
          </div>
        </div>
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 items-center">
            <Image
              src={`/why choose us/stack.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-2xl">Latest technology stack</p>
              <p>
                From HTML5 and CSS3 to advanced frameworkds like React, Laravel
                and WordPress, we use technologies that ensure performance and
                scalabilyty.
              </p>
            </div>
          </div>
        </div>
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 items-center">
            <Image
              src={`/why choose us/search-engine-optimization.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-2xl">SEO-optimized websites</p>
              <p>
                Every project we deliver is strurected for search engines to
                help you achieve better visisblity and higher rankings.
              </p>
            </div>
          </div>
        </div>
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 items-center">
            <Image
              src={`/why choose us/responsive.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-2xl">Mobile first approach.</p>
              <p>
                Our designs are 100% responsive, ensuring your website looks
                perfect on every device.
              </p>
            </div>
          </div>
        </div>

        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 items-center">
            <Image
              src={`/why choose us/technical-support.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2">
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
