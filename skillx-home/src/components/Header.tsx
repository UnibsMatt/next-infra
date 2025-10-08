import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-center items-center py-8 ">
        <nav className="flex space-x-6 rounded-full p-2 bg-opacity-50 backdrop-blur-sm">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
          >
            Benefits
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
          >
            Specifications
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
          >
            How-to
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
          >
            Contact-us
          </button>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
