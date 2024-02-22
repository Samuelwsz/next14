import { AddTag } from './add-tag';
import { Tags } from './tags';

export default function Page() {
  return (
    <div className="h-screen">
      <AddTag />
      <Tags />
    </div>
  );
}
