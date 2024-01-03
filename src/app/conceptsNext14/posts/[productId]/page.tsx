import Link from 'next/link';

type Props = {
  params: {
    productId: string;
  };
};

export default function PostPage({ params }: Props) {
  return (
    <section className="h-screen flex flex-col">
      <div>Post {params.productId}</div>
      <Link href="../../conceptsNext14/posts">Voltar</Link>
      <Link href="/">home</Link>
    </section>
  );
}
