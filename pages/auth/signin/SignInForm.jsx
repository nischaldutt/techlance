import Link from "next/link";
import { BsGoogle, BsTwitter, BsFacebook } from "react-icons/bs";

import { ClientSocialButton } from "@/components";

export default function SignInForm() {
  return (
    <div className="px-8 sm:px-12 py-16 shadow-xl rounded-lg border bg-white sm:w-[30rem]">
      <div className="text-3xl font-bold py-2 text-primary-100">
        Sign in to your account
      </div>
      <div className="text-gray-500 py-2 text-sm">Sign in with</div>

      <div className="grid grid-cols-3 gap-4">
        <ClientSocialButton SocialIcon={<BsGoogle />} />
        <ClientSocialButton SocialIcon={<BsTwitter />} />
        <ClientSocialButton SocialIcon={<BsFacebook />} />
      </div>

      <div className="grid grid-cols-3 gap-1 items-center py-4">
        <hr />
        <div className="text-gray-500 text-xs">Or continue with</div>
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
          className="mt-1 p-2 block w-full shadow-sm text-sm border
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
          className="mt-1 p-2 block w-full shadow-sm text-sm border
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
          <div className="ml-2 text-xs">
            <label htmlFor="remember" className="font-medium text-gray-700">
              Remember me
            </label>
          </div>
        </div>

        <div className="text-primary text-xs flex justify-end">
          Forgot your password?
        </div>
      </div>

      <div className="w-full py-2">
        <button
          type="submit"
          className="bg-primary-100 hover:bg-gray-300 hover:text-primary-100 text-white font-bold 
          py-2 px-4 rounded w-full"
        >
          Sign in
        </button>
      </div>

      <div className="w-full py-2 text-right">
        <Link href="/auth/signup">
          <a className="text-xs text-primary-100 font-bold">
            Don&apos;t have and account? Sign up
          </a>
        </Link>
      </div>
    </div>
  );
}
