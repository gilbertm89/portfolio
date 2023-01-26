export const Card = ({ children }) => {
  return (
    //bg-card variante dark shadow-indigo-500/50 shadow-lg
    <div className="bg-lightgreen rounded shadow-darkgreen shadow-lg w-full  p-8">
      {children}
    </div>
  );
};
