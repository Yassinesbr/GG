import Skeleton from "@/components/Skeleton";

const skeleton = () => {
  return (
    <div className="w-full flex align-center justify-center mt-8">
      <div className="w-8/12 mx-auto animate-pulse">
        <div className="w-full h-96 relative">
          <div className="h-full w-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <Skeleton lines={6} />
          </div>
          <div className="flex flex-col items-end">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skeleton;
