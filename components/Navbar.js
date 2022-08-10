export default function Navbar({ headers }) {
  return (
    <div className="border-0 py-4 flex justify-center sm:justify-between px-8 bg-secondary">
      <div>svg icon</div>
      <ul className="flex">
        {headers.map((head) => {
          return (
            <div
              className="px-4 hidden sm:block text-white hover:text-gray-300 cursor-pointer"
              key={head.label}
            >
              {head.label}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
