import { Suspense } from 'react';
import { AddTag } from './add-tag';
import { Tags } from './tags';

export default function Page() {
  return (
    <div className="h-screen">
      <AddTag />
      <Suspense fallback={<p>Carregando tags...</p>}>
        <Tags />
      </Suspense>
    </div>
  );
}
