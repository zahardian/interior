// import Image
import Image from "next/image";
import New from "./components/new";
import Recomended from "./components/recomended";

export default function Home() {
  return (
    <>
      <div className="banner bg-cover bg-no-repeat bg-center py-36 h-screen">
        <div className="container mt-40 md:mt-80 lg:mt-40">
          <h1 className="text-5xl md:text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>FURNITURE - CHAIR - SOFA - TABLE - LIGHTING</p>
          <div className="mt-12">
            <a
              href="/"
              className="bg-primary border border-primary text-white px-4 py-2 md:px-8 md:py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="w-10/12 grid md:grid-cols-1 lg:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image
              width={500}
              height={500}
              src="/delivery-van.svg"
              alt="feature1"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">free shopping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>

          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image
              width={500}
              height={500}
              src="/money-back.svg"
              alt="feature1"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">money returns</h4>
              <p className="text-gray-500 text-sm">30 Days money return</p>
            </div>
          </div>

          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image
              width={500}
              height={500}
              src="/service-hours.svg"
              alt="feature1"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/bedroom.jpg"
              alt="category1"
              className="w-full"
            />

            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-0 transition"
            >
              Bedroom
            </a>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/bathroom.jpg"
              alt="category1"
              className="w-full"
            />

            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-0 transition"
            >
              Bathroom
            </a>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/kitchenroom.jpg"
              alt="category1"
              className="w-full"
            />

            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-0 transition"
            >
              Kitchenroom
            </a>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/livingroom.jpg"
              alt="category1"
              className="w-full"
            />

            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-0 transition"
            >
              Livingroom
            </a>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/diningroom.jpg"
              alt="category1"
              className="w-full"
            />

            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-0 transition"
            >
              Diningroom
            </a>
          </div>

          <div className="relative rounded-sm overflow-hidden group">
            <Image
              width={500}
              height={500}
              src="/office.jpg"
              alt="category1"
              className="w-full"
            />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-0 transition"
            >
              Officeroom
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 uppercase mb-6">
          top new arrival
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <New />
          {/* <div className="bg-white rounded shadow overflow-hidden group">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/product1.png"
                alt="product1"
                className="w-full"
              />

              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/"
                  className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <Image
                    src="/icons8-search.svg"
                    width={20}
                    height={20}
                    alt="search"
                  />
                </a>
                <a
                  href="/"
                  className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <Image
                    src="/icons8-heart-50.png"
                    width={20}
                    height={20}
                    alt="heart"
                  />
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
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $45.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $55.00
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-xs md:text-sm text-yellow-400">
                  <Image src="/star.png" width={16} height={16} alt="star" />
                  <Image src="/star.png" width={16} height={16} alt="star" />
                  <Image src="/star.png" width={16} height={16} alt="star" />
                  <Image src="/star.png" width={16} height={16} alt="star" />
                  <Image src="/star.png" width={16} height={16} alt="star" />
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
                width={500}
                height={500}
                src="/product2.png"
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
                  Mattress
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  225.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $275.00
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
                <div className="text-xs text-gray-500 ml-3">(75)</div>
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
                width={500}
                height={500}
                src="/product3.png"
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
                  Sofa
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $165.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $175.00
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
                <div className="text-xs text-gray-500 ml-3">(110)</div>
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
                width={500}
                height={500}
                src="/product4.png"
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
                  Table
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $95.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $115.00
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
                <div className="text-xs text-gray-500 ml-3">(90)</div>
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

      <div className="container pb-16">
        <a href="/">
          <Image
            width={500}
            height={500}
            src="/offer.jpg"
            alt="diskon"
            className="w-full"
          />
        </a>
      </div>

      <div className="container pb-16">
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Recomended />
          {/* <div className="bg-white rounded shadow overflow-hidden group">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/product1.png"
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
                  Chair
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
                width={500}
                height={500}
                src="/product2.png"
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
                  Mattress
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  225.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $275.00
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
                <div className="text-xs text-gray-500 ml-3">(75)</div>
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
                width={500}
                height={500}
                src="/product3.png"
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
                  Sofa
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $165.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $175.00
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
                <div className="text-xs text-gray-500 ml-3">(110)</div>
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
                width={500}
                height={500}
                src="/product4.png"
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
                  Table
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $95.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $115.00
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
                <div className="text-xs text-gray-500 ml-3">(90)</div>
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
                width={500}
                height={500}
                src="/product5.png"
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
                  Washtafel
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $75.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $85.00
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
                width={500}
                height={500}
                src="/product6.png"
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
                  $85.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $95.00
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
                width={500}
                height={500}
                src="/product8.png"
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
                  $15.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $25.00
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
                width={500}
                height={500}
                src="/product9.png"
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
                <p className="text-lg md:text-xl text-primary font-semibold">
                  $35.00
                </p>
                <p className="text-lg md:text-xl text-gray-400 line-through">
                  $45.00
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
    </>
  );
}
