
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={` rounded-lg transition-all duration-300 bg-neutral-200/50 dark:bg-neutral-800/20 hover:bg-neutral-300/50 dark:hover:bg-neutral-700/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
