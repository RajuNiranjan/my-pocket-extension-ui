const Loader = () => {
  return (
    <div className="fixed inset-0 bg-slate-200 bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-xl text-gray-400"></span>
      </div>
    </div>
  );
};

export default Loader;
