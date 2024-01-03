'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Post1',
    href: '../../conceptsNext14/posts/1',
  },
  {
    name: 'Post2',
    href: '../../conceptsNext14/posts/2',
  },
];

export default function ConceptsNext14Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section className="bg-blue-950 text-white">
      <nav className="flex gap-3 pb-3 justify-center bg-white">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </section>
  );
}
