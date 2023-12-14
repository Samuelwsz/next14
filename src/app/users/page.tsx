import Link from 'next/link';

export default function Users() {
  return (
    <main className="py-4 text-center bg-blue-500">
      <div>a</div>
      <div className="flex flex-col">
        <Link href="/">Ir para home</Link>
        <Link href="/users/123">id</Link>
      </div>
    </main>
  );
}
