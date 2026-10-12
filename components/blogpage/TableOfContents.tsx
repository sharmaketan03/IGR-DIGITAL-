'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
}

export default function TableOfContents({ toc }: { toc: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || '');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = toc[0]?.id || '';
      toc.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top - 120 <= 0) {
            current = item.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sticky top-10 hidden md:block">
      <div className="text-[11.5px] font-bold tracking-wider uppercase text-[#6b7280] mb-3">
        On this page
      </div>
      <ul className="list-none m-0 p-0 border-l-2 border-[#e7e2d4]">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="mb-1">
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block py-1.5 pl-4 text-xs leading-relaxed transition-colors -ml-[2px] border-l-2 ${
                  isActive
                    ? 'text-[#0b5d45] border-[#0f7a5c] font-semibold'
                    : 'text-[#6b7280] border-transparent hover:text-[#16213a]'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Share Action Buttons */}
      <div className="flex gap-2.5 mt-7">
        <button
          onClick={copyLink}
          title={copied ? 'Copied!' : 'Copy link'}
          className="w-8 h-8 rounded-full border border-[#e7e2d4] bg-white flex items-center justify-center cursor-pointer hover:border-[#16213a] transition-colors relative"
        >
          <svg className="w-3.5 h-3.5 stroke-[#16213a]" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
            <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
          </svg>
        </button>
      </div>
    </div>
  );
}