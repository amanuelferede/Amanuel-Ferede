import Image from "next/image";
export default function Banner() {
  return (
<>
    <div className="w-full md:hidden flex space-x-2 mt-15">
      <Image src={`/c.jpg`} className="w-20  h-20 object-cover text-center rounded-full" sizes="100vh" width={0} height={0} alt="Amanuel Ferede"/>
        <div className="text-black grow">
        <p className="text-xs font-bold text-white mb-2">
          Make life easier with us
        </p>
        <p className="text-white  text-[0.975rem]">
                   Any design you want for your business.

        </p>
      </div>
    </div>
    <div
      className="md:min-h-screen md:block hidden min-h-90 overflow-y-auto relative"
      style={{
        backgroundImage: 'url("c.jpg")',
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    
      <div className="md:block hidden absolute top-28 left-5  w-160 ">
        <p className="text-6xl font-bold text-white">Make life easier with us</p>
      </div>

      <div className="md:block hidden absolute top-28 right-10 w-110 ">
        <p className="text-2xl font-sans text-justify font-extrabold text-white ">
          Any design you want for your business.
        </p>
      </div>
    </div>
</>
  );
}
