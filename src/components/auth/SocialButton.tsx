interface SocialButtonProps {
  provider: 'google' | 'apple';
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SocialButton({ provider, icon, children }: SocialButtonProps) {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}