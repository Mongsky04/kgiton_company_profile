function Button({ className = '', variant = "Primary", state = "Default" }) {
  const isDefaultAndPrimary = state === "Default" && variant === "Primary";
  const isDefaultAndTertiary = state === "Default" && variant === "Tertiary";
  
  return (
    <a 
      href="#kontak"
      className={`flex items-center justify-center px-6 py-3 rounded-full font-roboto font-semibold text-xl leading-[31px] transition-all hover:opacity-90 ${
        isDefaultAndPrimary 
          ? "bg-[#b6f500] text-[#050505]" 
          : isDefaultAndTertiary 
          ? "bg-transparent text-white" 
          : ""
      } ${className}`}
    >
      Hubungi Kami
    </a>
  );
}

export default Button;
