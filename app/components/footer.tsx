import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid md:grid-cols-3">
          {/* footer text */}
          <div className="col-span-1 space-y-8 md:pr-5">
            <h1>
              Zaza<span className="text-primary">terior</span>
            </h1>
            <p className="text-gray-500">
              Subscribe to our newsletter to stay up to date with the latest
              Zazaterior news.
            </p>
            <div className="flex space-x-2 md:space-x-6">
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <Image
                  src="/icons8-facebook.svg"
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </a>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <Image
                  src="/icons8-twitter-squared-50.png"
                  width={20}
                  height={20}
                  alt="twitter"
                />
              </a>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <Image
                  src="/icons8-instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </a>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                <Image
                  src="/icons8-linkedin.svg"
                  width={20}
                  height={20}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          {/* footr links */}
          <div className="col-span-2 grid grid-cols-2 gap-8 mt-10 md:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analytics
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Document
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API status
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  company
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    About
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Blog
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Jobs
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Press
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  legal
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Claim
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Privacy
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Policy
                  </a>
                  <a
                    href="/"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container space-y-4 md:space-y-0 md:flex items-center justify-center">
          <p className="text-white">© Zazaterior All - Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
