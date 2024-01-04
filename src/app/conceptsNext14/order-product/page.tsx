'use client';

import { useRouter } from 'next/navigation';

//navegação programatica usando useRouter
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('place order');
    router.push('/conceptsNext14');
  };
  return (
    <section className="h-screen">
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </section>
  );
}
