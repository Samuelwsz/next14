import { Metadata } from 'next';
import Link from 'next/link';

//ao usar title absolute a saida será apenas Posts ao inves de Posts | Concepts Next 14
export const metadata: Metadata = {
  title: { absolute: 'Posts' },
};

export default function Posts() {
  const productId = 100;
  return (
    <div className="h-screen flex flex-col gap-2">
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        aliquid recusandae accusamus eveniet, ipsam a voluptates necessitatibus
        quas quibusdam vitae corporis pariatur ipsa, temporibus fuga
        voluptatibus nemo. Voluptas, nulla atque?
      </h1>
      <Link href="posts/1">Post 1</Link>
      <Link href="posts/2">Post 2</Link>
      <Link href={`posts/${productId}`} replace>
        Posts {productId}
      </Link>
    </div>
  );
}
