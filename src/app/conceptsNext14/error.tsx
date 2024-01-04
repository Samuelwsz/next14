'use client';

// pagina estilizada de error para erros na pasta conceptsNext14
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen">
      <div className="flex gap-3">
        {error.message}
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
