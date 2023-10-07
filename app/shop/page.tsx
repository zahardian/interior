import Image from "next/image";
import All from "../components/shop";

export default function Shop() {
  return (
    <>
      <div className="container py-4 flex items-center gap-3 pt-52">
        <a href="/" className="text-primary text-base">
          <Image src="/icons8-home.svg" width={20} height={20} alt="logo" />
        </a>
        <span className="text-sm text-gray-400">
          <Image
            src="/icons8-chevron-right-30.png"
            width={15}
            height={15}
            alt="logo"
          />
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>

      <div className="container md:grid md:grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bathroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(12)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-3"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Kitchenroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(09)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-4"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Diningroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(06)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-5"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-5"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Dominik
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-6"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-6"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Karl
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(18)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-7"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-7"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Maxing
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(09)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-8"
                    className="accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="cat-8"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Ernest
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(12)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="max"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    htmlFor="size-s"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-m"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-l"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xl"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-red"
                  />
                  <label
                    htmlFor="color-red"
                    className="c-abu border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  />
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-purple"
                  />
                  <label
                    htmlFor="color-purple"
                    className="c-coklat border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  />
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    className="hidden"
                    id="color-black"
                  />
                  <label
                    htmlFor="color-black"
                    className="c-hitam border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-20 md:mt-0">
          <div className="flex items-center mb-4">
            <select className="w-44 text-sm cursor-pointer text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
              <option>Default sorting</option>
              <option>Price low-hight</option>
              <option>Price hight-low</option>
              <option>Latest product</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <div className="border w-10 h-9 flex items-center justify-center text-white bg-gray-100 rounded cursor-pointer">
                <Image src="/th-solid.svg" width={15} height={15} alt="logo" />
              </div>
              <div className="border w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <Image
                  src="/list-solid.svg"
                  width={15}
                  height={15}
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            <All />
            {/* <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <Image
                  src="/product5.png"
                  width={500}
                  height={500}
                  alt="product1"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a href="/">
                  <h4 className="font-medium text-lg md:text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Giomarr
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    $45.00
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 line-through">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="/"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <Image
                  src="/product6.png"
                  width={500}
                  height={500}
                  alt="product2"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a href="/">
                  <h4 className="font-medium text-lg md:text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Table
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    $45.00
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 line-through">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="/"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <Image
                  src="/product7.png"
                  width={500}
                  height={500}
                  alt="product3"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a href="/">
                  <h4 className="font-medium text-lg md:text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Table
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    $45.00
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 line-through">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="/"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <Image
                  src="/product8.png"
                  width={500}
                  height={500}
                  alt="product4"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a href="/">
                  <h4 className="font-medium text-lg md:text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Pot
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    $45.00
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 line-through">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="/"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <Image
                  src="/product9.png"
                  width={500}
                  height={500}
                  alt="product5"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a href="/">
                  <h4 className="font-medium text-lg md:text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Chair
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-lg md:selection:text-xl text-primary font-semibold">
                    $45.00
                  </p>
                  <p className="text-lg md:selection:text-xl text-gray-400 line-through">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="/"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div>
            <div className="bg-white rounded shadow overflow-hidden group">
              <div className="relative">
                <Image
                  src="/product10.png"
                  width={500}
                  height={500}
                  alt="product6"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <a
                    href="/"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>

              <div className="pt-4 pb-3 px-4">
                <a href="/">
                  <h4 className="font-medium text-lg md:text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Corazon
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    $45.00
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 line-through">
                    $55.00
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="/"
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
              >
                Add to cart
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
