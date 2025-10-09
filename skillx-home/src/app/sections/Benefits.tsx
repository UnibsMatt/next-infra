export default function Benefits() {
  return (
    <div className="w-full">
      <div className="text-left space-y-4 mb-12">
        <p className="text-xs text-white">Benefits</p>
        <p className="text-xl">We&apos;ve cracked the code.</p>
        <p className="text-xs text-white">
          Ara provides real insifhts whitout the data overload.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
        <div className=" rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4"></div>

          <div className="flex items-center mb-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-xl primary font-semibold mb-3">Reliability</h1>
          <p className="text-left  text-white text-sm">
            Our platform ensures 99.9% uptime with robust infrastructure and
            monitoring systems.
          </p>
        </div>

        <div className="rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4"></div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-3">Organization</h1>
          <p className="text-left  text-white text-sm">
            Keep your projects organized with intuitive tools and smart
            categorization features.
          </p>
        </div>

        <div className="rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4"></div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-3">Efficiency</h1>
          <p className="text-left  text-white text-sm">
            Streamline your workflow with automated processes and intelligent
            recommendations.
          </p>
        </div>

        <div className="rounded-lg">
          <div className="w-full h-px bg-gray-300 mb-4"></div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-3">Support</h1>
          <p className="text-left text-white text-sm">
            Get 24/7 expert support from our dedicated team of professionals.
          </p>
        </div>
      </div>
      <div className="py-8">
        <hr className="w-full border-t border-white" />
      </div>
    </div>
  );
}
