const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-2 text-gray-200 w-full py-1.5 rounded-lg hover:bg-white/10 flex items-center transition-all active:scale-[0.98] hover:shadow-[0_1px_hsl(0_0%_100%/0.15)_inset,0_-1px_hsl(0_0%_0%/1)_inset,0_10px_20px_-5px_hsl(0_0%_0%/1)]">
      {children}
    </button>
  );
};

export default Button;
