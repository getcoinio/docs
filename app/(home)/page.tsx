import Link from 'next/link';

// Static export has no server redirects, so the root page forwards with a meta refresh.
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
      <meta httpEquiv="refresh" content="0; url=/docs/" />
      <p>
        The documentation lives at{' '}
        <Link href="/docs/" className="font-medium underline">
          /docs
        </Link>
        .
      </p>
    </main>
  );
}
