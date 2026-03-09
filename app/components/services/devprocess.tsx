export default function OurDevelopmentProcess() {
    return (
        <div className=" md:py-15 py-5 lg:max-w-6xl xl:max-w-350 mx-auto ">
            <div className="text-center md:w-3/4 w-full">
                <div className="text-center md:w-3/4 w-full">
                    <p className="border-l-8 my-7 border-blue-700 pl-5 text-3xl  text-center my-1 inline-block">
                        <p className=" p-3 font-semibold md:text-justify text-3xl">Our development process.

                        </p>
                        <p className=" p-3 md:text-justify text-xl">Our proven 5 tep developmenet process ensures transparency, timely delivery and exceptional resutls.
                            .</p>

                    </p>
                </div>
            </div>


            <div className="md:px-0 px-3 grid md:grid-cols-3 grid-cols-2 gap-5 w-full">
                <div className="h-75 p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text-2xl">Consultation and research..</p>
                        <p>We understand your goals, target audience and competition..</p>
                    </div>
                </div>
                <div className="h-75 p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text-2xl">Design and prototyping.</p>
                        <p>Our U/Ux team creates a blueprint and visual mockup</p>
                    </div>
                </div>
                <div className="h-75 p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text-2xl">Development</p>
                        <p>We brging the design to life with clean and efficient code..</p>
                    </div>
                </div>
                <div className="h-75 p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text-2xl">Testing and quality assurance.</p>
                        <p>We regourously test for bugs, spped and responsivness.</p>
                    </div>
                </div>

                <div className="h-75 p-5 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold text-2xl">Lanuch and support.</p>
                        <p>After developmenet, we monitor performance, and offfer ongoing support..</p>
                    </div>
                </div>
            </div>
        </div>

    )
}