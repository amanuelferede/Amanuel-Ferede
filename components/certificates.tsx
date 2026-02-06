import Image from "next/image";
import Link from "next/link";
export default function Certificates() {
  return (
    <div className="w-full max-w-7xl mx-auto py-5" id="certificates">
      <div className="text-center">
        <p className="border-l-8 border-l-blue-600 pl-5 text-2xl font-semibold text-center my-1 inline-block">
          Certificates
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="w-full shadow-md relative group md:rounded-lg">
          <div className="absolute md:flex hidden md:rounded-lg items-center justify-center h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 ease-in-out left-0 right-0 bottom-0 bg-linear-to-r from-black/40 to-black/30">
            <Link
              target="_blank"
              title="View Document"
              className="p-6 bg-blue-400 rounded-full border-4 border-white"
              href={`https://drive.google.com/file/d/1dIh8GzqCrVIhRDBdL8UJg_AoWbjECaO6/view?usp=sharing`}
            >
              <Image
                src={`/certificates/link.png`}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 object-cover"
              />
            </Link>
          </div>
          <div className="p-4 flex items-center justify-center">
            <div className="flex flex-col space-y-1 items-center">
              <div className="p-6 bg-blue-50 rounded-full">
                <Image
                  src={`/certificates/programming.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-14 h-14 object-cover "
                />
              </div>

              <p className="text-xl my-2 font-bold">
                Fundamentals of programming
              </p>

              <p className="text-center">
                Programming fundamentals are the core principles and concepts
                that serve as the building blocks for all software development
                allowing developers to write logic that computers can execute,
                regardless of the specific programming language used.
              </p>
              <Link
                target="_blank"
                title="View Document"
                className="px-7 py-1.5 rounded-lg mt-3 flex items-center justify-center border border-black md:hidden "
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=sharing`}
              >
                <Image
                  src={`/certificates/link2.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-6 h-6 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full shadow-md relative group md:rounded-lg">
          <div className="absolute md:flex hidden md:rounded-lg items-center justify-center h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 ease-in-out left-0 right-0 bottom-0 bg-linear-to-r from-black/40 to-black/30">
            <Link
              target="_blank"
              title="View Document"
              className="p-6 bg-blue-400 rounded-full border-4 border-white"
              href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=sharing`}
            >
              <Image
                src={`/certificates/link.png`}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 object-cover"
              />
            </Link>
          </div>
          <div className="p-4 flex items-center justify-center">
            <div className="flex flex-col space-y-1 items-center">
              <div className="p-6 bg-blue-50 rounded-full">
                <Image
                  src={`/certificates/app-development.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-14 h-14 object-cover "
                />
              </div>

              <p className="text-xl my-2 font-bold">
                Android developer fundamentals
              </p>

              <p className="text-center">
                Core concepts like Activities, Fragments, Layouts (XML/Jetpack
                Compose), and the Android framework&apos;s building blocks
                (Services, Receivers, Providers) with Android Studio
              </p>
              <Link
                target="_blank"
                title="View Document"
                className="px-7 py-1.5 rounded-lg mt-3 flex items-center justify-center border border-black md:hidden "
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=sharing`}
              >
                <Image
                  src={`/certificates/link2.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-6 h-6 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full shadow-md relative group md:rounded-lg">
          <div className="absolute md:flex hidden md:rounded-lg items-center justify-center h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 ease-in-out left-0 right-0 bottom-0 bg-linear-to-r from-black/40 to-black/30">
            <Link
              target="_blank"
              title="View Document"
              className="p-6 bg-blue-400 rounded-full border-4 border-white"
              href={`https://drive.google.com/file/d/1tnA9YlmapjNED_DaiJhgAX8-rARAScgq/view?usp=sharing`}
            >
              <Image
                src={`/certificates/link.png`}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 object-cover"
              />
            </Link>
          </div>
          <div className="p-4 flex items-center justify-center">
            <div className="flex flex-col space-y-1 items-center">
              <div className="p-6 bg-blue-50 rounded-full">
                <Image
                  src={`/certificates/wave-chart.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-14 h-14 object-cover "
                />
              </div>

              <p className="text-xl my-2 font-bold">
                Data analysis fundamentals
              </p>

              <p className="text-center">
                Covers the basics of data types, descriptive statistics, and
                designing impactful visualizations to tell stories with data.
              </p>
              <Link
                target="_blank"
                title="View Document"
                className="px-7 py-1.5 rounded-lg mt-3 flex items-center justify-center border border-black md:hidden "
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=sharing`}
              >
                <Image
                  src={`/certificates/link2.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-6 h-6 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full shadow-md relative group md:rounded-lg">
          <div className="absolute md:flex hidden md:rounded-lg items-center justify-center h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 ease-in-out left-0 right-0 bottom-0 bg-linear-to-r from-black/40 to-black/30">
            <Link
              target="_blank"
              title="View Document"
              className="p-6 bg-blue-400 rounded-full border-4 border-white"
              href={`https://drive.google.com/file/d/1FdnMgmRlkXG715n7cYyGQ5ccQjeCv6Bx/view?usp=sharing`}
            >
              <Image
                src={`/certificates/link.png`}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 object-cover"
              />
            </Link>
          </div>
          <div className="p-4 flex items-center justify-center">
            <div className="flex flex-col space-y-1 items-center">
              <div className="p-6 bg-blue-50 rounded-full">
                <Image
                  src={`/certificates/diploma.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-14 h-14 object-cover "
                />
              </div>

              <p className="text-xl my-2 font-bold">Degree Certificate</p>

              <p className="text-center">
                an official document from a higher education institution (like a
                university) awarded to a student after successfully completing a
                specific, often lengthy, course of study
              </p>
              <Link
                target="_blank"
                title="View Document"
                className="px-7 py-1.5 rounded-lg mt-3 flex items-center justify-center border border-black md:hidden "
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=sharing`}
              >
                <Image
                  src={`/certificates/link2.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-6 h-6 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full shadow-md relative group md:rounded-lg">
          <div className="absolute md:flex hidden md:rounded-lg items-center justify-center h-1 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-200 ease-in-out left-0 right-0 bottom-0 bg-linear-to-r from-black/40 to-black/30">
            <Link
              target="_blank"
              title="View Document"
              className="p-6 bg-blue-400 rounded-full border-4 border-white"
              href={`https://drive.google.com/file/d/1tDxhUv77TdUwPhR3-fTNkXeWlIGMkgeV/view?usp=sharing`}
            >
              <Image
                src={`/certificates/link.png`}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 object-cover"
              />
            </Link>
          </div>
          <div className="p-4 flex items-center justify-center">
            <div className="flex flex-col space-y-1 items-center">
              <div className="p-6 bg-blue-50 rounded-full">
                <Image
                  src={`/certificates/a-score.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-14 h-14 object-cover "
                />
              </div>

              <p className="text-xl my-2 font-bold">Acedamic record</p>

              <p className="text-center">
                an official document detailing a student&apos;s educational
                journey, including courses taken, grades earned, degrees/awards,
                GPA
              </p>
              <Link
                target="_blank"
                title="View Document"
                className="px-7 py-1.5  rounded-lg mt-3 flex items-center justify-center border border-black md:hidden "
                href={`https://drive.google.com/file/d/1-drrQKZyWwPapXiK0zSy81mg4k42E2bG/view?usp=sharing`}
              >
                <Image
                  src={`/certificates/link2.png`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-6 h-6 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
