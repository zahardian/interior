import Image from "next/image";

export default function All() {
  const shopProduct = [
    {
      id: 1,
      image: "/product5.png",
      title: "Giomarr",
      disc: "$65.00",
      price: "$55.00",
      stars: "(70)",
    },
    {
      id: 2,
      image: "/product6.png",
      title: "Table",
      disc: "$35.00",
      price: "$40.00",
      stars: "(85)",
    },
    {
      id: 3,
      image: "/product7.png",
      title: "Table",
      disc: "$15.00",
      price: "$25.00",
      stars: "(115)",
    },
    {
      id: 4,
      image: "/product8.png",
      title: "Pot",
      disc: "$10.00",
      price: "$15.00",
      stars: "(125)",
    },
    {
      id: 5,
      image: "/product9.png",
      title: "Chair",
      disc: "$55.00",
      price: "$65.00",
      stars: "(95)",
    },
    {
      id: 6,
      image: "/product10.png",
      title: "Corazon",
      disc: "$20.00",
      price: "$35.00",
      stars: "(70)",
    },
  ];
  return (
    <>
      {shopProduct.map((product: any) => (
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
