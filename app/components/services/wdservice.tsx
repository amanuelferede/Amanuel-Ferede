import Image from "next/image";
export default function WebDesginServices() {
  return (
    <div
      className="py-5 lg:max-w-6xl xl:max-w-350 mx-auto"
      id="web-dev-service"
    >
      <div className="text-center md:max-w-5xl py-10 md:mx-auto w-full md:px-0 px-3">
        <div className="md:border-l-8 md:my-7  border-l-sky-600 md:pl-5  text-center my-1 inline-block">
          <p className="font-semibold text-justify text-3xl mb-2">
            Web design.
          </p>
          <p className="text-justify text-xl">
            We ofer a wide range of design services crafeted to suit different
            industries and audineces. Wheather you run a corporate business, a
            startup, or an e-commerce store, we have solutions tailored for you.
            We focus on creating intuitive, clean, and visually engaging
            webistes that guide users seamlessly from discover to conversion.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div
          className="md:h-1/2 overflow-hidden md:bg-sky-50  md:sticky md:top-20 md:flex md:items-center md:justify-center md:p-20"
          style={{}}
        >
          <p className="md:block md:py-40 hidden text-center  md:text-5xl text-3xl md:animate-pulse font-bold md:border-2 md:rounded-4xl border-sky-700 md:p-10  ">
            Web design services
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5  rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/headquarter.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  Corporate webiste design.
                </p>
                <p>
                  Professional and elegant designs that establish authority.
                </p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/e-commerce.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  E-commerce website design.
                </p>
                <p>User-centric layouts with optimized product displays.</p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/professional-portfolio.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  Portifolio and persoanl websites
                </p>
                <p>Creative designs for professionals and artists.</p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/landing-pages.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  Landing page design.
                </p>
                <p>Conversion-driven designs for marketing compaings.</p>
              </div>
            </div>

            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg text-sky-900">
                  Dedicated local support.
                </p>
                <p>
                  {" "}
                  We are based in Ethiopian, so you can always rely on quick
                  communication and on-ground assistance.
                </p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-6 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/web-development.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  Cusom webiste development.
                </p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-6 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/add.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  Wordpress development.
                </p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-6 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/web.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  E-commerce platforms (Shopify, Woocommerce, Magento)
                </p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-6 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/erp.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  CMS and ERP integraion.
                </p>
              </div>
            </div>
            <div className="h-75 md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-6 rounded-xl md:shadow-xl shadow-md  text-center flex items-center justify-center">
              <div className="flex flex-col space-y-2 items-center">
                <Image
                  src={`/wd-services/webpage-list.png`}
                  width={0}
                  height={0}
                  className="w-25 h-25"
                  sizes="100vh"
                  alt="web desgin"
                />
                <p className="font-semibold text-lg text-sky-900">
                  Web applications and portals..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
