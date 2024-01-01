'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href.toString();

  return (
    <>
      <Link
        href={href}
        className="text-black py-1 px-2 font-semibold"
        {...rest}
      >
        <div className={`${isActive ? 'bg-green-500 p-1' : ''}`}>
          {children}
        </div>
      </Link>
    </>
  );
};
