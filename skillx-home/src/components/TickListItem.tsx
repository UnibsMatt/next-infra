export default function TickListItem({
  title,
  descriptions,
  className,
}: {
  title: string;
  descriptions: { check: boolean; item: string }[];
  className: string;
}) {
  return (
    <div className={`${className}`}>
      <h3 className="text-xl text-[#dfecc6] font-semibold mb-3 text-center">
        {title}
      </h3>
      <hr className="w-full border-t border-white my-6" />

      {descriptions.map((item, index) => (
        <div className="text-gray-600 text-left" key={index}>
          <p className="flex items-center gap-2">
            {item.check ? (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6l12 12M18 6l-12 12"
                />
              </svg>
            )}
            <span className="text-xs text-white">{item.item}</span>
          </p>
          <hr className="w-full border-t border-white my-6" />
        </div>
      ))}
    </div>
  );
}
