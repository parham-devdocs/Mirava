export function MirrorSkeleton() {
    return (
      <div className="bg-cyan-900/30 rounded-xl p-5 h-[280px] animate-pulse flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="h-4 bg-cyan-700/50 rounded w-3/4" />
          <div className="h-4 w-4 bg-cyan-700/40 rounded shrink-0" />
        </div>
  
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-cyan-700/30 rounded w-full" />
          <div className="h-3 bg-cyan-700/30 rounded w-5/6" />
          <div className="h-3 bg-cyan-700/30 rounded w-4/6" />
        </div>
  
        <div className="flex gap-2">
          <div className="h-5 w-16 bg-cyan-700/40 rounded-full" />
          <div className="h-5 w-20 bg-cyan-700/40 rounded-full" />
        </div>
      </div>
    );
  }