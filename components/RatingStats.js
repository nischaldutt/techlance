import Link from "next/link";

const FilledStar = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-secondary-900"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      data-darkreader-inline-fill=""
    >
      <title>First star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

const UnfilledStar = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-gray-300 dark:text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      data-darkreader-inline-fill=""
    >
      <title>Fifth star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

const StatsBar = ({ starLabel, filledWidth }) => {
  return (
    <div className="flex items-center mt-4">
      <span className="text-sm font-medium">{starLabel} star</span>
      <div className="mx-4 w-1/2 h-5 bg-gray-200 rounded dark:bg-gray-900">
        <div
          className={`h-5 bg-secondary-900 rounded w-[${filledWidth}%]`}
          style={{ width: `${filledWidth}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium">{filledWidth}%</span>
    </div>
  );
};

const RatingStats = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <p className="ml-2 text-xl font-bold text-gray-900">4.95/5</p>
        <div className="flex items-center mb-3">
          {[1, 2, 3, 4].map((n) => {
            return <FilledStar key={n} />;
          })}
          <UnfilledStar />
        </div>
      </div>

      <p className="text-sm font-medium text-gray-500">1,745 global ratings</p>

      <div className="">
        {[70, 17, 8, 4, 1].map((filledPercent, index) => {
          return (
            <StatsBar
              key={filledPercent}
              starLabel={5 - index}
              filledWidth={filledPercent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RatingStats;
