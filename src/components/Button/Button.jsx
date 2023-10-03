const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full px-7 py-4 outline-none font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor}`
          : 'bg-coral-red text-teal-50'
      } ${borderColor ? `border-2 ${borderColor}` : 'border-none'} ${
        fullWidth && 'w-full'
      }`}
    >
      <span>{label}</span>

      {iconURL && (
        <img
          src={iconURL}
          alt={`${label} icon`}
          className="ml-2 rounded-full w-5 h-5 bg-white"
        />
      )}
    </button>
  );
};

export default Button;
