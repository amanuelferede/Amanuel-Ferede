export default function AboutUs() {
  return (
    <div className="bg-sky-200 w-full h-screen py-5 md:px-0 px-3 " id="aboutme">
      <div className="max-w-7xl mx-auto h-full relative ">
        <div className="md:absolute md:z-20 md:top-1/2 md:h-1/2 md:w-2/3 md:-translate-y-1/2">
          <div className="bg-sky-200 p-10 absolute border-t-4 border-l-4 border-l-sky-600 border-t-sky-600">
            <p className="text-4xl font-semibold mb-4">Spider Technologies</p>
            <p className="text-xl text-justify leading-relaxed">
              In todya&apos;s digital era, a website is not just an online
              present - it is the foundation of your brand&apos;s indentity and
              success. We deliver end-to-end web solutions that empower
              businesses to grow, engage, and lead in the competitive Ethiopian
              makret. Weahter you need a visually stunning desgin, a fast and
              functional website, or custom software built for your business, we
              have the expereince to make it happen. We combine modern design
              practices with advanced coding standards to bring your vision to
              life.
            </p>
          </div>
        </div>

        <div
          className="md:w-1/2 md:absolute opacity-90 md:z-10 md:top-10 md:right-0 md:h-1/2"
          style={{
            backgroundImage: `url('c.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
