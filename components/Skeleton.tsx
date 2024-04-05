interface SkeletonProps {
  height?: string;
  width?: string;
  lines?: number;
}

const Skeleton = ({
  height = "h-5",
  width = "w-full",
  lines = 1,
}: SkeletonProps) => {
  const skeletonLines = Array.from({ length: lines });
  return (
    <>
      {skeletonLines.map((_, index) => (
        <div
          key={index}
          className={`${height} bg-gray-200 rounded-full dark:bg-gray-700 ${width} mb-4`}
        ></div>
      ))}
    </>
  );
};
export default Skeleton;
