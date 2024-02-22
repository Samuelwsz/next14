import { revalidateTag } from 'next/cache';
import { AddTagButton } from './add-tag-button';

export function AddTag() {
  async function handleCreateSlug(form: FormData) {
    'use server';

    const slug = form.get('slug');

    if (!slug) {
      return;
    }

    //delay 3s
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await fetch('http://localhost:3333/tags', {
      method: 'POST',
      body: JSON.stringify({
        slug,
      }),
    });

    revalidateTag('get-tags');
  }

  return (
    <form action={handleCreateSlug} method="POST">
      <input
        type="text"
        name="slug"
        placeholder="Slug da tag"
        className="text-black"
      />
      <AddTagButton />
    </form>
  );
}
