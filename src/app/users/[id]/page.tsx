//pagina dinamica
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

//aqui foi criado um metadata dinamico para os ids
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.id}`);
    }, 100);
  });
  return { title: `Product ${title}` };
};

export default function UserPage({ params }: Props) {
  return (
    <>
      <div className="h-screen justify-center py-5">
        <h2>User</h2>
        <p>Id: {params.id}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem
          non unde voluptates dolorem sint illum voluptate veniam eos
          perspiciatis rem placeat neque qui aperiam, pariatur architecto earum
          voluptatibus natus!
        </p>
      </div>
    </>
  );
}
