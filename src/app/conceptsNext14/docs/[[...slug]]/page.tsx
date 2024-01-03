import Link from 'next/link';

import { Metadata } from 'next';

//a saida sera Docs | Concepts Next 14
export const metadata: Metadata = {
  title: 'Docs',
};

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1 className="flex flex-col">
        Viewing docs for feature {params.slug[0]} and concepts {params.slug[1]}
        <Link href="/conceptsNext14/docs">voltar</Link>
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return (
    <div className="h-screen flex flex-col">
      <h1>Docs home page</h1>
      <Link href="/conceptsNext14">Voltar</Link>
      <Link href="/conceptsNext14/docs/1/1">teste</Link>
    </div>
  );
}
