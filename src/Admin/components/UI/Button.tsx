import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
const variants: Record<string, string> = {
  primary:
    'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 ring-1 ring-blue-500 hover:ring-blue-600 shadow-md hover:shadow-lg transition-all',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 ring-1 ring-gray-300 hover:ring-gray-400 shadow-sm hover:shadow-md transition-all',
  danger:
    'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 ring-1 ring-red-500 hover:ring-red-600 shadow-md hover:shadow-lg transition-all',
  ghost:
    'bg-transparent text-blue-600 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 focus:ring-1 focus:ring-blue-400 transition-all',
  outline:
    'bg-white border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-100 active:bg-gray-200 focus:ring-1 focus:ring-gray-400 transition-all',
};




  const sizes: Record<string, string> = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const iconSizes: Record<string, number> = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const spinnerColor =
    variant === 'secondary' || variant === 'outline' || variant === 'ghost'
      ? 'border-gray-700 border-t-transparent'
      : 'border-white border-t-transparent';

  return (
    <button
      type={type}
      className={[
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <div
          className={`animate-spin rounded-full h-4 w-4 border-2 ${spinnerColor} mr-2`}
        />
      ) : (
        Icon &&
        iconPosition === 'left' && (
          <Icon size={iconSizes[size]} className="mr-2" />
        )
      )}

      {children}

      {!loading && Icon && iconPosition === 'right' && (
        <Icon size={iconSizes[size]} className="ml-2" />
      )}
    </button>
  );
};

export default Button;
