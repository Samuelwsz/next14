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

  return (
    <main>
      <div className="flex flex-col">
        <Link href="/users/1" className="text-xl pb-3">
          id
        </Link>

        {data.data.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </main>
  );
}
