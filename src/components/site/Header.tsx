"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "首页" },
  { href: "/about", label: "期刊介绍" },
  { href: "/editorial-board", label: "编委会" },
  { href: "/submission", label: "投稿指南" },
  { href: "/contact", label: "联系我们" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="header-container">
      <div className="header">
        <Link href="/" className="logo">
          新文科研究 New Liberal Arts Research
        </Link>
        <ul className="nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={
                  isActive(item.href)
                    ? { color: "#0052a3", fontWeight: "bold" }
                    : undefined
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="issn-box">
          <strong>ISSN: 3106-5449</strong>
          <span>e-ISSN: 3106-5457</span>
        </div>
      </div>
    </div>
  );
}
