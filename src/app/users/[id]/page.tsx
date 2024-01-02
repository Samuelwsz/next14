//pagina dinamica

export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="justify-center py-5 mr-96">
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
