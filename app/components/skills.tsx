export default function Skills() {
  return (
    <div className="max-w-6xl px-3 mx-auto py-5" id="skills">
      <div className="grid grid-cols-12 w-full md:gap-20 my-10">
        <div className="md:col-span-6 col-span-12 ">
          <div className="border-l-8 border-l-blue-600 pl-5">
            <p className="text-2xl font-semibold">Frontend technologies</p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-3 py-5 gap-4">
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              HTML
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              CSS
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              Tailwind CSS
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              JAVASCRIPT
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              REACT
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              Redux
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              SWR
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              React Query
            </div>
            <div className="text-center md:col-span-2  py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              React hook form
            </div>
            <div className=" text-center md:col-span-2 py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              Framer motion
            </div>
            <div className="text-nowrap md:col-span-3 text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              Material-UI (MUI)
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 ">
          <div className="border-l-8 border-l-blue-600 pl-5">
            <p className="text-2xl font-semibold">Backend technologies</p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-3 py-5 gap-4">
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              NODE JS
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              EXPRESS JS
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              API
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              JWT
            </div>
            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              SQL
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              POSTGRESS
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              MONGO DB
            </div>

            <div className="text-nowrap text-center py-1.5 bg-gray-200 font-medium font-sans rounded-sm md:text-md text-sm">
              Prisma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
