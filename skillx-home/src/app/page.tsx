import Header from "@/components/Header";
import { TrustedBy, Benefits, WhoAreWe } from "@/app/sections";
import Image from "next/image";
export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <Header />
      <div className="flex justify-between items-centertransparent-bg">
        <Image
          src="/logo.png"
          alt="Home"
          width={200}
          height={200}
          className="hover:scale-105 transition-all duration-300"
        />
        <button className="text-white px-8 rounded-xl hover:bg-gray-100 hover:text-blue-600">
          Login
        </button>
      </div>

      <div className="flex justify-center items-centertransparent-bg">
        <Image src="/first_dark.png" alt="Home" width={1000} height={1000} />
      </div>
      <TrustedBy />
      <Benefits />
      <div className="flex justify-center items-centertransparent-bg">
        <Image src="/second.png" alt="Home" width={1000} height={1000} />
      </div>
      <WhoAreWe />
    </div>
  );
}
