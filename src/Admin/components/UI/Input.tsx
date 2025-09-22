import { LucideIcon } from 'lucide-react';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <Icon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        )}
        <input
          className={`
            w-full px-4 py-3 rounded-xl border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200 bg-gray-50 hover:bg-white
            ${Icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${Icon && iconPosition === 'right' ? 'pr-10' : ''}
            ${error ? 'border-red-300 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {Icon && iconPosition === 'right' && (
          <Icon size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs font-medium">{error}</p>
      )}
    </div>
  );
};

export default Input;