type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function ButtonCase({
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]  !text-sm gap-2 !font-bold     bg-[linear-gradient(307deg,#c85f1e_3.2%,#ffc60a_99.71%)] ${className}`}
    >
      {children}
    </button>
  );
}
