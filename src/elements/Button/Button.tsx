import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

enum Variant {
  DEFAULT = 'focus:ring-4 rounded-lg focus:outline-none',
  ROUNDED = 'rounded-full focus:outline-none focus:ring-4',
  OUTLINE = 'border focus:ring-4 focus:outline-none rounded-lg',
  TEXT = ' focus:ring-4 rounded-lg focus:outline-none'
}

enum Colors {
  DEFAULT = 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:border-blue-500 dark:text-blue-500',
  SUCCESS = 'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:border-green-500 dark:text-green-500',
  ERROR = 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  WARN = 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
  INFO = 'text-white bg-cyan-700 hover:text-white border-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300 dark:border-cyan-400 dark:text-cyan-400 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-900',
  NEUTRAL = 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
}

enum OutlineColors {
  DEFAULT = 'text-blue-700 hover:text-blue-700 border-blue-700 hover:bg-blue-200 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
  SUCCESS = 'text-green-700 hover:text-white border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
  ERROR = 'text-red-700 hover:text-white border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
  WARN = 'text-yellow-400 hover:text-white border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
  INFO = 'text-cyan-700 hover:text-white border-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300 dark:border-cyan-400 dark:text-cyan-400 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-900',
  NEUTRAL = 'text-gray-900 hover:text-white border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
}

enum TextColors {
  DEFAULT = 'text-blue-700 hover:text-blue-700 border-blue-700 hover:bg-blue-200 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
  SUCCESS = 'text-green-700 hover:text-green-700 border-green-700 hover:bg-green-200 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
  ERROR = 'text-red-700 hover:text-red-700 border-red-700 hover:bg-red-200 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-red-700 dark:hover:bg-red-200 dark:focus:ring-red-800',
  WARN = 'text-yellow-400 hover:bg-yellow-100 border-yellow-400 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
  INFO = 'text-cyan-700 hover:text-white border-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300 dark:border-cyan-400 dark:text-cyan-400 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-900',
  NEUTRAL = 'text-gray-900 hover:bg-gray-200 border-gray-800 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
}

enum Size {
  'DEFAULT' = 'font-medium text-sm px-5 py-2.5 text-center',
  'XS' = 'px-3 py-2 text-xs  font-medium text-center',
  'SM' = 'px-3 py-2 text-sm font-medium text-center',
  'LG' = 'px-5 py-3 text-base font-medium text-center',
  'XL' = 'font-medium text-base px-6 py-3.5 text-center '
}

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof Variant;
  size?: keyof typeof Size;
  color?: keyof typeof Colors;
} & React.ComponentPropsWithoutRef<'button'>;

/* type ButtonProps = {
  children?: ReactNode;
  // [key: string]: any;
  variant= `${Variant}`;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}  */

const Button = ({
  children,
  variant = 'DEFAULT',
  size = 'DEFAULT',
  color = 'DEFAULT',
  className = '',
  onClick
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        'mb-2 mr-2 text-center ',
        ['DEFAULT', 'ROUNDED'].includes(variant)
          ? Colors[color]
          : variant === 'OUTLINE'
          ? OutlineColors[color]
          : TextColors[color],
        Size[size],
        Variant[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
