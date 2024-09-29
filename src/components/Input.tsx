const Input = ({ ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
      <input
        {...props}
        className="w-full px-4 py-2 bg-[#11141F] border border-[#34416D] rounded-md text-[#868686] hover:text-white focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};
export default Input;
