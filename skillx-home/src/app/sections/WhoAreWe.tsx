import Image from "next/image";
export default function WhoAreWe() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-12">Who Are We</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-84 flex items-center justify-center">
              <Image
                src="/nic.png"
                alt="Creative Solutions"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg text-black font-semibold mb-3">
                Expert Team
              </h3>
              <p className="text-xs text-black">
                Our experienced professionals bring years of industry knowledge
                and expertise to deliver exceptional results for your business
                needs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-84 flex items-center justify-center">
              <Image
                src="/nic.png"
                alt="Creative Solutions"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg text-black font-semibold mb-3">
                Innovation Focus
              </h3>
              <p className="text-xs text-black">
                We leverage cutting-edge technology and innovative solutions to
                help businesses stay ahead in today`&apos;`s competitive market.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-84 flex items-center justify-center">
              <Image
                src="/nic.png"
                alt="Creative Solutions"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg text-black font-semibold mb-3">
                Creative Solutions
              </h3>
              <p className="text-xs text-black">
                We think outside the box to provide creative and tailored
                solutions that address your unique challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
