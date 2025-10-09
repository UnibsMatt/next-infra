import Image from "next/image";

export default function TrustedBy() {
  return (
    <div>
      <span className="text-lg font-semibold text-[color:var(--muted-text)] mb-4">
        Trusted by
      </span>
      <div className="flex justify-center items-center p8 transparent-bg">
        <div className="w-full max-w-4xl flex flex-col items-center py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-6 w-full">
            <Image
              src="https://placehold.co/100x40/png"
              alt="Google"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
            <Image
              src="https://placehold.co/100x40/png"
              alt="Microsoft"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
            <Image
              src="https://placehold.co/100x40/png"
              alt="Amazon"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
            <Image
              src="https://placehold.co/100x40/png"
              alt="Facebook"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
            <Image
              src="https://placehold.co/100x40/png"
              alt="Netflix"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
            <Image
              src="https://placehold.co/100x40/png"
              alt="Airbnb"
              width={100}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-white" />
    </div>
  );
}
