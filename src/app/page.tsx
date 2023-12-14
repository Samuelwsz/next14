import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>Home</p>
      <Link href="/users">ir para users</Link>
    </main>
  );
}
