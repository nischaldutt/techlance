import { BsGoogle, BsTwitter, BsFacebook, BsBullseye } from "react-icons/bs";

import SocialButton from "./SocialButton";

export default function SigninForm() {
  return (
    <div className="px-8 sm:px-12 py-8">
      <div className="text-2xl font-bold pb-4">
        <BsBullseye />
      </div>
      <div className="text-3xl sm:text-4xl font-bold py-2">
        Sign in to your account
      </div>
      <div className="text-gray-500 py-2">Sign in with</div>

      <div className="grid grid-cols-3 gap-4">
        <SocialButton SocialIcon={<BsGoogle />} />
        <SocialButton SocialIcon={<BsTwitter />} />
        <SocialButton SocialIcon={<BsFacebook />} />
      </div>

      <div className="grid grid-cols-3 gap-1 items-center py-4">
        <hr />
        <div className="text-gray-500 text-xs sm:text-sm">Or continue with</div>
        <hr />
      </div>

      <div className="pb-2">
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
          border-gray-300 rounded-md text-gray-700"
        />
      </div>

      <div className="py-2">
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

      <div className="grid grid-cols-2 py-4">
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
          />
          <div className="ml-2 text-sm">
            <label htmlFor="remember" className="font-medium text-gray-700">
              Remember me
            </label>
          </div>
        </div>

        <div className="text-primary text-xs sm:text-sm flex justify-end">
          Forgot your password?
        </div>
      </div>

      <div className="w-full py-2">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
          py-2 px-4 rounded w-full"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
