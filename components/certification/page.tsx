import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function CertificationBadge() {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 shadow-xs">
      <Image
        src="/awards/googlepartner.png"
        alt="Google Partner Badge"
        width={75}
        height={24}
        className="h-6 w-auto object-contain"
        priority
      />
    </div>
  );
}