export default function SocialButton({ SocialIcon }) {
  return (
    <button
      type="button"
      className={`bg-white py-2 px-3 border border-gray-300 
        rounded-md shadow-sm leading-4 font-medium hover:bg-gray-50 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-gray-500 text-xl text-gray-500 
        hover:text-gray-900 flex justify-center`}
    >
      {SocialIcon}
    </button>
  );
}
