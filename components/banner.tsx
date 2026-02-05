export default function Banner() {
  return (
    <div
      className="md:min-h-screen min-h-65 overflow-y-auto relative"
      style={{
        backgroundImage: 'url("/works/1.jpg")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/40 p-2 absolute w-3/4 left-2 bottom-2 md:hidden block">
        <p className="text-xl font-bold text-white mb-2">
          Hi, I am Amanuel Ferede
        </p>
        <p className="text-white text-[0.975rem]">
          Web Developer | Frontend Developer | FullStack Web Developer | React
          Developer
        </p>
      </div>
      <div className="md:block hidden absolute top-28 left-5  w-160 ">
        <p className="text-7xl font-bold text-white">Hi, I am Amanuel Ferede</p>
      </div>

      <div className="md:block hidden absolute top-28 right-10 w-110 ">
        <p className="text-2xl font-sans text-justify font-extrabold text-pink-600 ">
          Web Developer | Frontend Developer | FullStack Web Developer | React
          Developer
        </p>
      </div>
    </div>
  );
}
