import Image from "next/image";

export default function MapYourSuccess() {
  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold text-[#dfecc6]">Map Your Success</h1>
        <button className="text-xs text-black font-semibold bg-[#dfecc6] py-2 px-4 rounded-3xl transition duration-300">
          Discover More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className=" rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4" />

          <h1 className="text-4xl primary font-semibold my-8">01</h1>

          <p className="text-sm">Get started</p>
          <p className="text-white text-xs my-4">
            With our intuitive setup, you are up and running in no time.
          </p>
        </div>
        <div className=" rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4" />

          <h1 className="text-4xl primary font-semibold my-8">02</h1>

          <p className="text-sm">Customize and configure</p>
          <p className="text-white text-xs my-4">
            Adapt Area to your specific requirements and preferences.
          </p>
        </div>

        <div className=" rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4" />

          <h1 className="text-4xl primary font-semibold my-8">03</h1>

          <p className="text-sm">Grow Your Business</p>
          <p className="text-white text-xs my-4">
            Make informed decisions to exceed your goals.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <Image src="/industry.png" alt="Map" width={1000} height={1000} />
      </div>
      <hr className="w-full border-t border-white mt-8" />
    </div>
  );
}
