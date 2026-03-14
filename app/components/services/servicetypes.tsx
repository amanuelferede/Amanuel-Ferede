export default function ServiceTypes() {
  // this is not the problem
    return (
        
      <div className="grid md:grid-cols-3 gap-5  py-5 md:px-0 px-3 lg:max-w-6xl xl:max-w-350 mx-auto">
        <div className="h-75  md:rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-black">Website desgin</p>
            <p className="text-black">We design websites that reflect your brand's values, personality, and bussiness goals.</p>
          </div>
        </div>
         <div className="h-75  md:rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-black">Software development</p>
            <p className="text-black">We create intelligent digital solutions that simplify business operations, increase productivity and enhance customer engagement..</p>
          </div>
        </div>

        <div className="h-75  md:rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-black">Graphic desgin.</p>
            <p className="text-black">We create intelligent digital solutions that simplify business operations, increase productivity and enhance customer engagement..</p>
          </div>
        </div>
        </div>
    )
}