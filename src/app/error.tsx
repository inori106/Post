'use client';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <p className='w-fit bg-red-600 text-white font-bold text-xl px-2 py-4 rounded-md'>
        {error.message}
      </p>
      {/* <button onClick={() => reset()}>Try again</button> */}
    </div>
  );
}
