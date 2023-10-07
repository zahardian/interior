import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="bg-about text-center bg-cover bg-center h-[550px] bg-no-repeat overflow-hidden">
        <h1 className="inset-0 bg-black bg-opacity-60 pt-80 h-[550px] text-white text-3xl font-bold">
          About Us
        </h1>
      </div>
      <div className="mb-20">
        <div className="grid lg:grid-cols-5 container mt-20 gap-5">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <p className="text-primary mb-4">OUR HISTORY</p>
            <h1 className="text-2xl md:text-3xl mb-5">
              Creative and New furniture trends collection
            </h1>
            <p className="mb-8">
              Furniture is a potent visual marker of our times,” says Caroline
              Stevenson, head of cultural and ... “Trend analysis of any given
              era will reveal societys values and aspirations.” ... The urge to
              creative expression runs deep
            </p>
            <div className="flex gap-10">
              <div>
                <h1 className="text-primary text-2xl md:text-3xl">11</h1>
                <p>Years Exprience</p>
              </div>
              <div>
                <h1 className="text-primary text-2xl md:text-3xl">20K</h1>
                <p>Happy Customer</p>
              </div>
              <div>
                <h1 className="text-primary text-2xl md:text-3xl">100%</h1>
                <p>Clients Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Image
              className="rounded-lg"
              src="/pic-about.jpg"
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-5 container mt-20 gap-10">
          <div className="md:col-span-2">
            <Image
              className="rounded-lg h-full"
              src="/pic-about1.jpg"
              alt="about"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:col-span-3">
            <p className="text-primary mb-4">OUR VISION</p>
            <h1 className="text-2xl md:text-3xl mb-5">
              Our vision is simple - We exist to accelerate our customers’
              progress
            </h1>
            <p className="mb-8">
              we design and deliver our customers’ digital transformation by
              bringing together their vision with our industry knowledge and
              deep technological expertise. we design and deliver our customers’
              digital transformation
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Image
                  src="/icons8-thumb-24.png"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <p>We build strong relationships</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/icons8-thumb-24.png"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <p>We encourage initiative and provide opportunity</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/icons8-thumb-24.png"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <p>We embrace change and creativity</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/icons8-thumb-24.png"
                  width={20}
                  height={20}
                  alt="logo"
                />
                <p>We champion an environment of honesty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
