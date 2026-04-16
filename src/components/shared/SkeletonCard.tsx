import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card className="overflow-hidden bg-card border-border min-h-[160px] md:min-h-[200px] flex flex-row items-center gap-8 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem]">
      {/* Icon placeholder */}
      <Skeleton className="size-20 md:size-32 rounded-[1.5rem] md:rounded-[2.5rem] shrink-0" />
      
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-4 flex-1">
          {/* Title */}
          <Skeleton className="h-8 md:h-12 w-[60%] md:w-[40%] rounded-lg" />
          
          {/* Subtitle/Address */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-[30%] rounded-md" />
          </div>
        </div>

        {/* Action button placeholder */}
        <Skeleton className="h-10 md:h-12 w-24 md:w-40 rounded-xl shrink-0" />
      </div>
    </Card>
  );
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-8 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
