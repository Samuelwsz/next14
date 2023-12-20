'use client';

//SOLID - DIP (Dependency Inversion Principle)

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
};

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <h2>lista</h2>
      {products.map((product) => {
        return <p key={product.id}>{product.name}</p>;
      })}
    </>
  );
}

export default function SolidEstudos() {
  return (
    <main className="flex justify-center py-2">
      <p>solid</p>
      <Products />
    </main>
  );
}
