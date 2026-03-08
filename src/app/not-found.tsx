export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-zinc-600">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-white">Go home</a>
    </div>
  );
}
