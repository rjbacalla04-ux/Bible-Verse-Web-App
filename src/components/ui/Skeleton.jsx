// src/components/ui/Skeleton.jsx
const Skeleton = ({ className }) => {
  return (
    <div 
      className={`bg-gray-300 animate-pulse rounded-md ${className}`}
    ></div>
  );
};

export default Skeleton;