"use client";

const error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <p className="text-indigo-500 font-bold text-7xl">Error</p>
      <p className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
        Something went wrong
      </p>
    </div>
  );
};

export default error;
