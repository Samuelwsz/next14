import Link from 'next/link';

export default function ConceptsNext14Tutorial() {
  return (
    <section className="h-screen">
      <div className="flex justify-between pb-4 text-xl font-semibold">
        <h1>Welcome</h1>
        <Link href="conceptsNext14/posts">Post</Link>
        <Link href="conceptsNext14/docs">Docs</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quam
        nisi animi odit quasi modi perferendis blanditiis dolore aut, ipsa
        repellat voluptatibus possimus debitis accusantium molestiae, assumenda
        error iste. Non!
      </p>
    </section>
  );
}
