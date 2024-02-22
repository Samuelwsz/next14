interface Tag {
  id: number;
  slug: string;
}

export async function Tags() {
  const response = await fetch('http://localhost:3333/tags', {
    next: {
      tags: ['get-tags'],
    },
  });

  const data = await response.json();

  return (
    <>
      <ul>
        {data.map((item: Tag) => (
          <li key={item.id}>{item.slug}</li>
        ))}
      </ul>
    </>
  );
}
