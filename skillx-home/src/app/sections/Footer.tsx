export default function Footer() {
  return (
    <div>
      <div className="flex-col justify-center text-center space-y-8">
        <h1 className="text-4xl text-[#dfecc6] font-semibold">
          Connect with us
        </h1>
        <p className="text-white text-xs">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful tool.
        </p>
        <button className="text-black text-sm bg-[#a7d5c0] font-semibold py-2 px-4 rounded-3xl">
          Learn more
        </button>
        <hr className="w-full border-t border-white mt-8" />

        <div className="flex justify-between items-center">
          <button className="text-white text-sm font-semibold">Facebook</button>
          <button className="text-white text-sm font-semibold">Twitter</button>
          <button className="text-white text-sm font-semibold">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
