import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group shrink-0 transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/Brand-clean.png"
          alt="IGR Digital Logo"
          width={160}
          height={48}
          priority
          className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

