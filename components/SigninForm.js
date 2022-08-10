import { BsGoogle, BsTwitter, BsFacebook, BsBullseye } from "react-icons/bs";

import SocialButton from "./SocialButton";

export default function SigninForm() {
  return (
    <div className="border border-red-900  px-12 py-8">
      <div className="text-2xl font-bold">
        <BsBullseye />
      </div>
      <div className="text-4xl font-bold">Sign in to your account</div>
      <div className="text-gray-500">Sign in with</div>

      <div className="grid grid-cols-3 gap-4">
        <SocialButton SocialIcon={<BsGoogle />} />
        <SocialButton SocialIcon={<BsTwitter />} />
        <SocialButton SocialIcon={<BsFacebook />} />
      </div>

      <div className="text-gray-500">Or continue with</div>

      <div className="col-span-6 sm:col-span-4">
        <label
          htmlFor="email-address"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <input
          type="text"
          name="email-address"
          id="email-address"
          autoComplete="email"
          placeholder="john_doe@gmail.com"
          className="mt-1 p-2 block w-full shadow-sm sm:text-sm border
          border-gray-300 focus:border-gray-700 rounded-md text-gray-700"
        />
      </div>

      <div className="col-span-6 sm:col-span-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          className="mt-1 p-2 block w-full shadow-sm sm:text-sm border
          border-gray-300 rounded-md text-gray-700"
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="font-medium text-gray-700">
              Remember me
            </label>
          </div>
        </div>

        <div className="text-primary">Forgot your password?</div>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
          py-2 px-4 rounded w-full"
        >
          Button
        </button>
      </div>
    </div>
  );
}
