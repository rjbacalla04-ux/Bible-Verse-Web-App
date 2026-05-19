// src/components/ResultLinksSkeleton.jsx
import Skeleton from './ui/Skeleton';
import Card from './ui/Card';

const ResultLinksSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Gagawa tayo ng tatlong cards na naka-loop */}
      {[1, 2, 3].map((item) => (
        <Card key={item} className="flex flex-col items-start">
          {/* Ang colored square icon sa image */}
          <Skeleton className="h-12 w-12 rounded-lg mb-4" />
          
          {/* Ang mga text lines (Commentary titles/descriptions) */}
          <Skeleton className="h-4 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-3" />
          <Skeleton className="h-4 w-5/6 mb-6" />
          
          {/* Ang button sa ilalim ng card */}
          <Skeleton className="h-10 w-full rounded-md" />
        </Card>
      ))}
    </div>
  );
};

export default ResultLinksSkeleton;