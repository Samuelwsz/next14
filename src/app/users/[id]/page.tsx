//pagina dinamica

import Link from 'next/link';

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="flex justify-center py-5 mr-96">
        <h2>User</h2>
        <p>Id: {params.id}</p>
      </div>
      <Link href="/users" className="flex justify-center mr-96">
        Users
      </Link>
    </>
  );
}
