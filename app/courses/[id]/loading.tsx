import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Skeleton className="h-12 w-3/4 bg-gray-700 mb-4" />
              <Skeleton className="h-20 w-full bg-gray-700 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-48 bg-gray-700" />
                <Skeleton className="h-6 w-36 bg-gray-700" />
              </div>
            </div>
            <div className="lg:justify-self-end">
              <Skeleton className="w-full max-w-lg aspect-video bg-gray-700 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-10 w-full mb-6" />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-[400px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}