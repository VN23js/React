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
      className={`flex items-center  !text-sm gap-2 !font-bold !bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)] ${className}`}
    >
      {children}
    </button>
  );
}
