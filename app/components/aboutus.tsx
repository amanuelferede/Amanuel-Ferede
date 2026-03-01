import Image from "next/image";
export default function AboutUs() {
  return (
    <div
      className="w-full py-20 lg:max-w-7xl xl:max-w-350 mx-auto py-5 md:px-0 px-3 "
      id="aboutme"
    >
      <div className="border-l-8 border-l-blue-600 pl-5 my-3">
        <p className="text-2xl font-semibold">About Us</p>
      </div>{" "}
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 col-span-12">
          <div className="">
            <p className="text-lg text-justify">
              In todya's digital era, a website is not just an online present - it is the foundation of your brand's indentity and success. We deliver end-to-end web solutions that empower businesses to grow, engage, and lead in the competitive Ethiopian makret. Weahter you need a visually stunning desgin, a fast and functional website, or custom software built for your business, we have the expereince to make it happen. We combine modern design practices with advanced coding standards to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12">
          <Image src={`/l.jpg`} className="w-full" sizes="100vh" width={0} height={0} alt="Amanuel Ferede" />

        </div>
      </div>
    </div>
  );
}
