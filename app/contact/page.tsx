import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="bg-contact text-center bg-cover bg-center h-[550px] bg-no-repeat overflow-hidden">
        <h1 className="inset-0 bg-black bg-opacity-60 pt-80 h-[550px] text-white text-3xl font-bold">
          Contact Us
        </h1>
      </div>

      <div className="container grid lg:grid-cols-3 mt-10 gap-5 mb-20">
        <div className="lg:col-span-2 rounded-lg shadow-xl px-5 py-7">
          <h1 className="text-2xl md:text-3xl uppercase mb-2">
            Leave us a message
          </h1>
          <p className="mb-5">
            Use the form below to get in touch with the sales team
          </p>
          <form>
            <div className="md:flex gap-4 mb-5">
              <div className="w-full">
                <h4 className="mb-2">
                  First Name <span className="text-primary">*</span>
                </h4>
                <input
                  type="text"
                  className="w-full h-10 rounded border border-slate-200 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="w-full">
                <h4 className="mb-2">
                  Last Name <span className="text-primary">*</span>
                </h4>
                <input
                  type="text"
                  className="w-full h-10 rounded border border-slate-200 focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-5">
              <h4 className="mb-2">
                Email Address <span className="text-primary">*</span>
              </h4>
              <input
                type="email"
                className="w-full h-10 rounded border border-slate-200 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <h4 className="mb-2">Subject</h4>
              <input
                type="text"
                className="w-full h-10 rounded border border-slate-200 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="mb-5">
              <h4 className="mb-2">
                Your Message <span className="text-primary">*</span>
              </h4>
              <textarea
                name="message"
                id="message"
                className="w-full h-40 rounded border border-slate-200 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <button className="bg-primary hover:bg-white hover:text-primary border border-primary text-white text-base px-4 py-2 rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-lg shadow-xl px-5 py-7">
          <div className="mb-10">
            <h1 className="text-lg font-semibold mb-5 uppercase">Our store</h1>
            <div className="space-y-5">
              <div className="flex gap-4">
                <Image
                  src="/location-dot-solid.svg"
                  width={12}
                  height={12}
                  alt="logo"
                />
                <p>7895 Dr New Albuquerue, NM 19800, nited States Of America</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/phone-solid.svg"
                  width={15}
                  height={15}
                  alt="logo"
                />
                <p>+566 477 256, +566 254 575</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/envelope-solid.svg"
                  width={15}
                  height={15}
                  alt="logo"
                />
                <p>info@domain.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold uppercase mb-5">
              Hours of operation
            </h1>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Saturday</p>
                <p>12:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Sunday</p>
                <p>12:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Monday</p>
                <p>12:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Tuesday</p>
                <p>12:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Wednesday</p>
                <p>12:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Thursday</p>
                <p>12:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Friday</p>
                <p>12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
