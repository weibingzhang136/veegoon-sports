type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    outline:
"border border-white/40 text-white hover:bg-white hover:text-gray-900 transition-colors",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-8
        py-3
        font-medium
        transition
        duration-300
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}