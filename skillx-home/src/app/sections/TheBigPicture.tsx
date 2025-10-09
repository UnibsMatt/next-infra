import Image from "next/image";

export default function TheBigPicture() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="rounded-lg">
          <hr className="w-full border-t border-white mb-4" />

          <h2 className="text-3xl font-semibold mb-4">See the Big Picture</h2>
          <p className="text-white text-sm">
            Area turns your data into clear, vibrant, visualts that show you
            exactly whats happening in each region.
          </p>

          <div className="flex-col justify-center items-center mt-4">
            <hr className="w-full border-t border-white mb-4" />
            <div className="flex justify-start">
              <p className="text-white text-sm mr-4">01</p>
              <p className="text-[#dfecc6] text-xs">
                Spot trends in seconds: No more digging
              </p>
            </div>
          </div>
          <div className="flex-col justify-center items-center mt-4">
            <hr className="w-full border-t border-white mb-4" />
            <div className="flex justify-start">
              <p className="text-white text-sm mr-4">02</p>
              <p className="text-[#dfecc6] text-xs">
                Get everyone on the same page: share easy-to-understand reports
              </p>
            </div>
          </div>
          <div className="flex-col justify-center items-center mt-4">
            <hr className="w-full border-t border-white mb-4" />
            <div className="flex justify-start">
              <p className="text-white text-sm mr-4">03</p>
              <p className="text-[#dfecc6] text-xs">
                Make presentations Pop: Interactive maprs and dashboards keep
              </p>
            </div>
          </div>
          <div className="flex-col justify-center items-center mt-4">
            <hr className="w-full border-t border-white mb-4" />
            <div className="flex justify-start">
              <p className="text-white text-sm mr-4">04</p>
              <p className="text-[#dfecc6] text-xs">
                Your global map snapshot get a quick, clear overview of the
                world.{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-left mt-4 h-8">
            <button className="text-black px-4 rounded-xl bg-[#dfecc6] text-xs">
              Discover More
            </button>
          </div>
        </div>

        <div className="rounded-lg">
          <Image
            src="/big.png"
            alt="The Big Picture"
            width={500}
            height={500}
          />
        </div>
      </div>
      <hr className="w-full border-t border-white mt-8" />
    </div>
  );
}
