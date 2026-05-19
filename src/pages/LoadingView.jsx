// src/pages/LoadingView.jsx
import VerseSkeleton from "../components/ui/VerseSkeleton";
import AiInsightSkeleton from "../components/ui/AiInsightSkeleton";
import ResultLinksSkeleton from "../components/ResultLinkSkeleton";

const LoadingView = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-4 animate-in fade-in duration-500">
      
      {/* Taas: Ang Verse */}
      
        <VerseSkeleton />
      
      
      
      {/* Gitna: Ang AI Insights */}
    
        <AiInsightSkeleton />

      
      {/* Baba: Ang mga links/commentaries */}
      <div className="w-full mt-8 border-t border-gray-100 dark:border-zinc-800 pt-12 text-left">
        <p className="mb-8 text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase text-center">
          Gathering spiritual resources...
        </p>
        <ResultLinksSkeleton />
      </div>
      
    </div>
  );
};

export default LoadingView;