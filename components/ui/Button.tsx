type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
      {children}
    </button>
  );
}