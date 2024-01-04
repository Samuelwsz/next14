'use client';

//nesse exemplo a pagina layout foi renomeada para template.tsx, com o layout ao usar um useState o valor no input se mantem conforme mudo de pagina, mas ao usar template o input reseta a cada navegação de página

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
  const [input, setInput] = useState('');

  return (
    <section className="bg-blue-950 text-white">
      <div>
        <input
          type="text"
          value={input}
          className="text-black mb-2"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
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
