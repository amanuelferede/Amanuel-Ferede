import Image from "next/image";
export default function Banner() {
  return (
<>
    <div className="w-full md:hidden flex space-x-2 mt-15">
      <Image src={`/banner2.png`} className="w-20  h-20 object-cover text-center rounded-full" sizes="100vh" width={0} height={0} alt="Amanuel Ferede"/>
        <div className="text-black grow">
        <p className="text-xs font-bold text-white mb-2">
          Hi, I am Amanuel Ferede
        </p>
        <p className="text-blue  text-[0.975rem]">
          Web Developer | Frontend Developer | FullStack Web Developer | React
          Developer
        </p>
      </div>
    </div>
    <div
      className="md:min-h-screen md:block hidden min-h-90 overflow-y-auto relative"
      style={{
        backgroundImage: 'url("banner2.png")',
        backgroundPosition: "top center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
    
      <div className="md:block hidden absolute top-28 left-5  w-160 ">
        <p className="text-6xl font-bold text-blue-400">Hi, I am Amanuel Ferede</p>
      </div>

      <div className="md:block hidden absolute top-28 right-10 w-110 ">
        <p className="text-2xl font-sans text-justify font-extrabold text-blue-400 ">
          Web Developer | Frontend Developer | FullStack Web Developer | React
          Developer
        </p>
      </div>
    </div>
</>
  );
}
