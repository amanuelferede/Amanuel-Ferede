export default function ServiceTypes() {
    return (
        
      <div className="grid md:grid-cols-3 gap-5 py-15 py-15 lg:max-w-6xl xl:max-w-350 mx-auto">
        <div className="h-75 bg-red-400 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-white">Website desgin</p>
            <p className="text-white">We design websites that reflect your brand's values, personality, and bussiness goals.</p>
          </div>
        </div>
         <div className="h-75 bg-green-400 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-white">Software development</p>
            <p className="text-white">We create intelligent digital solutions that simplify business operations, increase productivity and enhance customer engagement..</p>
          </div>
        </div>

        <div className="h-75 bg-blue-400 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl text-white">Graphic desgin.</p>
            <p className="text-white">We create intelligent digital solutions that simplify business operations, increase productivity and enhance customer engagement..</p>
          </div>
        </div>
        </div>
    )
}