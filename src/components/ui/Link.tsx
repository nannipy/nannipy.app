
import React from 'react';
import NextLink from 'next/link';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children, className, ...props }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`group relative inline-block ${className}`}
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100 dark:bg-white"></span>
    </NextLink>
  );
};

export default Link;
