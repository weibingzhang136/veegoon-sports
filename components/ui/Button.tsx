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
      "border border-gray-300 text-gray-900 hover:bg-gray-100",
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