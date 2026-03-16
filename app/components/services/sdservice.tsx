import Image from "next/image";
export default function SoftwareDevelopmentServices() {
  return (
    <div className="pb-15 lg:max-w-6xl xl:max-w-350 md:px-0 px-3 mx-auto">
      <div className="text-center md:max-w-5xl py-10 md:mx-auto w-full md:px-0 px-3">
        <div className="md:border-l-8 md:border-l-sky-600 md:pl-5  text-center inline-block">
          <p className="mb-2 font-semibold text-justify text-3xl">
            Software development.
          </p>
          <p className="text-justify text-xl">
            We deliver more than just websites. We work collpaborativly to
            deliver a product that is robust, secure and scalable. We ensure
            that every line of code adds value to your business goals. Our
            developmenet process is strategic, transparent, and aligned with
            your business objectives. We specialize on.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:h-65 h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/custom.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">Custom software solutions.</p>
          </div>
        </div>

        <div className="md:h-65 h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/computer.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              Business process automation tools.
            </p>
          </div>
        </div>

        {/** */}
        <div className="md:h-65 h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/profit-up.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              Inventory and sales amangement systems.
            </p>
          </div>
        </div>
        <div className="md:h-65 h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/customer-relationship-management.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              ERP and CRM software developmenet.
            </p>
          </div>
        </div>

        <div className="md:h-65 h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/app-development.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              Mobile app development (Android and Ios).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
