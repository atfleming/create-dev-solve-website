import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
}
export const Button = ({
  children,
  href,
  variant = 'primary',
  onClick,
  className = ''
}: ButtonProps) => {
  const baseClasses = 'py-3 px-6 text-sm md:text-base inline-block transition-all duration-300 transform hover:-translate-y-1 relative rounded';
  const variantClasses: Record<string, string> = {
    // primary uses the retro Press Start font and pastel green bg with dark text for contrast
    primary: 'bg-pastel-green text-[#071020] border-2 border-pastel-green font-press',
    outline: 'bg-transparent text-[#3dff4f] border-2 border-[#3dff4f] hover:bg-[#3dff4f]/10 font-vt'
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if (href) {
    return <a href={href} className={classes}>
        {children}
      </a>;
  }
  return <button onClick={onClick} className={classes}>
      {children}
    </button>;
};