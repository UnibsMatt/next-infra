import TickListItem from "@/components/TickListItem";
import Image from "next/image";

export default function WhyChooseArea() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Area?</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Discover the advantages that make SkillX the perfect choice for your
          learning journey
        </p>
        <button className="text-xs text-black bg-[#dfecc6] font-semibold py-3 px-8 rounded-3xl transition duration-300">
          Discover More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <TickListItem
          title="Skill-X"
          descriptions={[
            { check: true, item: "Ultra fast browsing" },
            { check: true, item: "Advanced Ai insights" },
            { check: true, item: "User Friendly" },
            { check: true, item: "Seamless Integration" },
          ]}
          className="bg-gray-400 rounded-lg p-6"
        />
        <TickListItem
          title="Web surge"
          descriptions={[
            { check: true, item: "Ultra fast browsing" },
            { check: true, item: "Advanced Ai insights" },
            { check: false, item: "User Friendly" },
            { check: false, item: "Seamless Integration" },
          ]}
          className="rounded-lg p-6"
        />
        <TickListItem
          title="Hyperview"
          descriptions={[
            { check: true, item: "Ultra fast browsing" },
            { check: false, item: "Advanced Ai insights" },
            { check: true, item: "User Friendly" },
            { check: false, item: "Seamless Integration" },
          ]}
          className="rounded-lg p-6"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-24">
        <div className="rounded-lg">
          <Image
            src="/testimony.png"
            alt="The Big Picture"
            width={1000}
            height={1000}
          />
        </div>

        <div className="rounded-lg">
          <hr className="w-full border-t border-white mb-4" />
          <div className="flex justify-center text-left p-6 text-2xl font-semibold mb-4 text-[#f1e500]">
            <h2>
              &quot;I was skeptical, but SKILL-X has completely transformed the
              way I manage my business. The data visualizations are so clear and
              intuitive, and the platform is so easy to use. I cannot imagine
              working without it.&quot;
            </h2>
          </div>
          <div className="flex-col justify-left text-white p-6 text-xs">
            <p>John Doe</p>
            <p> Head of seat</p>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-white mt-8" />
    </div>
  );
}
