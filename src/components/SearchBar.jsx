const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mt-10">
      <input
        value={value}
        onChange={onChange}
        placeholder="Search delicious recipes..."
        className="w-11/12 md:w-1/2 px-6 py-3 rounded-full shadow-lg 
                   focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
};

export default SearchBar;
