import Link from 'next/link';
export default function NotFound() {
  return <section className="mx-auto max-w-3xl px-6 py-32 text-center">
    <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
    <p className="mb-8">Let us help you find your next Lakshadweep holiday.</p>
    <Link href="/packages" className="text-blue-700 underline">Explore our packages</Link>
    <p className="mt-4"><Link href="/contact" className="text-blue-700 underline">Contact Sea Horizon Holidays</Link></p>
  </section>;
}
