
import { ArrayofLinks, LastLineLink } from "./FooterCardArray"


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* flowbite */}
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="me-3 h-8"
                alt="FlowBite Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6  md:w-3/4">
            {
              ArrayofLinks.map((link) => (

                <div>

                  <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    {link.title}
                  </h2>
                  <ul className="font-medium text-gray-500 dark:text-gray-400 space-y-2">
                    {link.link}
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        {/* other last line on page */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex gap-9 sm:mt-0 sm:justify-center">
            {
              LastLineLink.map((item) => (
                <a
                  href={item.link}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  key={item.id}
                  aria-label={item.srWord}
                >
                  {item.icon}
                  <span className="sr-only">{item.srWord}</span>
                </a>

              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
