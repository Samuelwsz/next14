import axios from 'axios';
import Link from 'next/link';

type PostProps = {
  id: number;
  title: string;
};

export default async function Users() {
  const { data } = await axios.get<{ data: PostProps[] }>(
    'http://localhost:3000/examplerouteapi',
  );

  console.log(data);

  return (
    <main className="py-4 text-center">
      <div className="flex flex-col">
        <Link href="/users/123">id</Link>
        {data.data.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </main>
  );
}
