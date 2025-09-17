import Skeleton from "./Skeleton";

export default function StatCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between">
      {/* Left section */}
      <div className="flex-1">
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-6 w-16 mb-2" />
        <Skeleton className="h-3 w-12" />
      </div>

      {/* Right icon circle */}
      <Skeleton className="w-10 h-10 rounded-full" />
    </div>
  );
}
