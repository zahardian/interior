import Image from "next/image";

export default function New() {
  const newProduct = [
    {
      id: 1,
      image: "/product1.png",
      title: "Chair",
      disc: "$45.00",
      price: "$55.00",
      stars: "(150)",
    },
    {
      id: 2,
      image: "/product2.png",
      title: "Mattress",
      disc: "$225.00",
      price: "$275.00",
      stars: "(75)",
    },
    {
      id: 3,
      image: "/product3.png",
      title: "Sofa",
      disc: "$165.00",
      price: "$175.00",
      stars: "(110)",
    },
    {
      id: 4,
      image: "/product4.png",
      title: "Table",
      disc: "$95.00",
      price: "$115.00",
      stars: "(90)",
    },
  ];
  return (
    <>
      {newProduct.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded shadow overflow-hidden group"
        >
          <div className="relative">
            <Image
              width={500}
              height={500}
              src={product.image}
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
                {product.title}
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-lg md:text-xl text-primary font-semibold">
                {product.disc}
              </p>
              <p className="text-lg md:text-xl text-gray-400 line-through">
                {product.price}
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
              <div className="text-xs text-gray-500 ml-3">{product.stars}</div>
            </div>
          </div>
          <a
            href="/"
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </a>
        </div>
      ))}
    </>
  );
}
