import Link from "next/link";

// Placeholder wordmark logo. Swap for an <Image> once the final logo file is ready.
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0.5 text-2xl font-extrabold tracking-tight">
      <span className="text-google-blue">I</span>
      <span className="text-google-red">G</span>
      <span className="text-google-yellow">R</span>
      <span className="ml-1.5 text-slate-900">Digital</span>
    </Link>
  );
}
