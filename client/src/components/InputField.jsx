const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  className = "",
  required = true,
  valid = true,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-gray-700 mb-2 font-semibold ps-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 rounded-md border-2 outline-none ${
          valid ? "border-gray-500" : "border-red-500"
        }`}
        required={required}
      />
    </div>
  );
};

export default InputField;
