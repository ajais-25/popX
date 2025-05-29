const InputField = ({
  type,
  name,
  label,
  placeholder,
  state,
  setState,
  isRequired,
}) => {
  return (
    <div className="flex flex-col relative mb-6">
      <label
        htmlFor={name}
        className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3"
      >
        {label}
        <span className="text-red-600">*</span>
      </label>
      <input
        type={type || "text"}
        name={name}
        id={name}
        className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
        placeholder={placeholder}
        value={state || ""}
        onChange={(e) => setState(e.target.value)}
        required={isRequired || false}
      />
    </div>
  );
};

export default InputField;
