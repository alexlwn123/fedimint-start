import type { KeyboardEventHandler, ReactNode } from 'react';

type AccessibleCardProps = {
  onClick?: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function AccessibleCard({ onClick, title, children, className = '' }: AccessibleCardProps) {
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={0}
      aria-label={title}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={
        `bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden ` +
        `transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500/50 ` +
        (onClick ? 'cursor-pointer hover:shadow-2xl hover:scale-[1.01]' : '') + ' ' + className
      }
    >
      {children}
    </div>
  );
}


