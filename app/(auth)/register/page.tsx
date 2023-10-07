import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="container py-4">
        <div className="mx-auto md:w-[500px] rounded-lg shadow-xl px-5 py-7">
          <h1 className="text-2xl md:text-3xl mb-10">Register</h1>
          <div className="space-y-2 mb-5">
            <h4>
              Full Name <span className="text-primary">*</span>
            </h4>
            <input
              type="text"
              placeholder="type fullname"
              className="w-full h-10 px-4 text-sm rounded border border-slate-200 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="space-y-2 mb-5">
            <h4>
              Email Address <span className="text-primary">*</span>
            </h4>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full h-10 px-4 text-sm rounded border border-slate-200 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="space-y-2 mb-8">
            <h4>
              Password <span className="text-primary">*</span>
            </h4>
            <input
              type="password"
              placeholder="type password"
              className="w-full h-10 px-4 text-sm rounded border border-slate-200 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="space-y-2 mb-8">
            <h4>
              Confirm Password <span className="text-primary">*</span>
            </h4>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full h-10 px-4 text-sm rounded border border-slate-200 focus:border-primary focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <button className="bg-primary hover:bg-white hover:text-primary border border-primary w-full rounded py-2 text-white uppercase">
              Register
            </button>
          </div>
          <div className="mb-4">
            <h4 className="uppercase text-center">Or login in with</h4>
          </div>
          <div className="mb-4">
            <div className="flex gap-4">
              <button className="bg-blue-800 hover:bg-white hover:text-blue-800 border border-blue-800 w-full px-3 py-2 rounded text-white">
                Facebook
              </button>
              <button className="bg-amber-600 hover:bg-white hover:text-amber-600 border border-amber-600 w-full px-3 py-2 rounded text-white">
                Google
              </button>
            </div>
          </div>
          <div className="text-center">
            <h4>
              Have an account.?{" "}
              <Link href="/login" className="text-primary cursor-pointer">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
