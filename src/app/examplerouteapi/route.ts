import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}
