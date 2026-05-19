// src/components/VerseSkeleton.jsx
const VerseSkeleton = () => {
  return (
    <div className="w-full max-w-2xl bg-white dark:bg-zinc-800/50 rounded-md shadow-sm p-12 text-center border border-gray-50 dark:border-zinc-800 animate-pulse">
      {/* Top small bar */}
      <div className="h-2 w-24 bg-gray-200 dark:bg-zinc-700 mx-auto mb-10 rounded-full"></div>
      
      {/* Verse lines */}
      <div className="space-y-4 mb-8">
        <div className="h-4 w-full bg-gray-100 dark:bg-zinc-700 rounded-full"></div>
        <div className="h-4 w-[90%] bg-gray-100 dark:bg-zinc-700 rounded-full mx-auto"></div>
        <div className="h-4 w-[75%] bg-gray-100 dark:bg-zinc-700 rounded-full mx-auto"></div>
      </div>

      {/* Citation bar */}
      <div className="h-3 w-32 bg-gray-100 dark:bg-zinc-700 mx-auto mb-12 rounded-full"></div>

      {/* Bottom accent line */}
      <div className="w-20 h-[2px] bg-amber-100/50 dark:bg-zinc-700 mx-auto mb-8"></div>
      
      {/* Bottom text bar */}
      <div className="h-2 w-28 bg-gray-100 dark:bg-zinc-700 mx-auto rounded-full"></div>
    </div>
  );
};

export default VerseSkeleton;