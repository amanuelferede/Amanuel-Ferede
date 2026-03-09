import { DiJava } from "react-icons/di";

export default function WhyChooseUs() {
    return (
     <div className="md:py-15 py-5 lg:max-w-6xl xl:max-w-350 mx-auto">
           <div className="text-center md:w-3/4 w-full">
        <div className="text-center">
          <div className="border-l-8 my-7 border-l-blue-600 pl-5 text-2xl  text-center my-1 inline-block">
            <p className=" p-3 font-semibold md:text-justify text-xl">Why choose us.
            </p>
            <p className=" p-3 md:text-justify text-xl">We understand that every business is unique, and so should be its website. Our mission is to create digital expereinces that not only look great but aslo perform flawlessly.</p>

          </div>
        </div>
      </div>
        <div className="grid md:grid-cols-3 gap-5 ">
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl">Creative and proffessional design</p>
            <p>We design websites that reflect your brand's values, personality, and bussiness goals.</p>
          </div>
        </div>
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl">Latest technology stack</p>
            <p>From HTML5 and CSS3 to advanced frameworkds like React, Laravel and WordPress, we use technologies that ensure performance and scalabilyty.</p>
          </div>
        </div>
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl">SEO-optimized websites</p>
            <p>Every project we deliver is strurected for search engines to help you achieve better visisblity and higher rankings.</p>
          </div>
        </div>
        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl">Mobile first approach.</p>
            <p>Our designs are 100% responsive, ensuring your website looks perfect on every device.</p>
          </div>
        </div>

        <div className="h-75 p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl">Dedicated local support.</p>
            <p> We are based in Ethiopian, so you can always rely on quick communication and on-ground assistance.</p>
          </div>
        </div>
      </div>
     </div>
    )
}