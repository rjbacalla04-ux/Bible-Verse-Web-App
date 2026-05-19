// src/components/ui/Card.jsx
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white p-6 rounded-x1 shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default Card;