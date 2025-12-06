import { Skeleton } from "./ui/skeleton";

export const MenuCardSkeleton = () => (
  <div className="rounded-xl overflow-hidden bg-card border border-border">
    <Skeleton className="w-full h-64" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex items-center justify-between pt-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  </div>
);

export const MenuListSkeleton = () => (
  <div className="space-y-4">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
        <Skeleton className="w-24 h-24 rounded-lg flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-16" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-10 w-full mt-2" />
        </div>
      </div>
    ))}
  </div>
);

