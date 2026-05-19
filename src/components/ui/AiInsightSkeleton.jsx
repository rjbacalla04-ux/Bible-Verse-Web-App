// src/components/ui/AiInsightSkeleton.jsx

const AiInsightSkeleton = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 animate-pulse text-left">
      {/* Label part with SVG Icon */}
      <div className="flex items-center gap-2 mb-4">
        {/* Sparkle Icon SVG */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-amber-600 dark:text-amber-500"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
        
        {/* Maliit na bar sa tabi ng icon */}
        <div className="h-[6px] w-20 bg-amber-100 dark:bg-amber-900/30 rounded-full"></div>
      </div>

      {/* AI Insight Lines (Based on image_f35a73.png) */}
      <div className="space-y-3 pl-6">
        <div className="h-[6px] w-full bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
        <div className="h-[6px] w-[85%] bg-gray-100 dark:bg-zinc-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default AiInsightSkeleton;