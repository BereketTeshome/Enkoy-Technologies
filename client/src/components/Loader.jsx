const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#111827]">
      <div className="relative bottom-6">
        <div className="border-4 border-[#FAC650] border-solid rounded-full w-28 h-28 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-[#FAC650]">
          Enkoy
        </div>
      </div>
    </div>
  );
};

export default Loader;
