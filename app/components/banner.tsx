export default function Banner() {
  return (
    <>
      <div
        className="w-full flex pt-50 justify-center md:hidden min-h-screen bg-red-400 space-x-2 mt-15"
        style={{
          backgroundImage: 'url("c.jpg")',
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-black grow">
          <p className="text-4xl text-center font-bold text-white mb-2">
            Make life easier with us
          </p>
          <p className="text-white text-center  text-[0.975rem]">
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
        <div className="md:block hidden absolute top-1/4 left-20  w-1/2 ">
          <p className="text-6xl mb-5 font-bold text-white">
            Make life easier with us
          </p>
          <p className="text-2xl font-sans text-justify font-extrabold text-white ">
            Any design you want for your business.
          </p>
        </div>
      </div>
    </>
  );
}
