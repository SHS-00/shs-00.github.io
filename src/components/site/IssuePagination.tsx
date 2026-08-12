"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function IssuePagination({
  currentIssue,
  prevHref,
  nextHref,
}: {
  currentIssue: string;
  prevHref?: string;
  nextHref?: string;
}) {
  const router = useRouter();
  const [input, setInput] = useState("");

  const jumpToIssue = () => {
    const value = input.trim();
    if (!value) return;

    const match = value.match(/^(\d+)-(\d+)$/);
    if (!match) {
      alert("请输入正确格式，例如：1-3");
      return;
    }

    const volume = parseInt(match[1], 10);
    const issue = parseInt(match[2], 10);

    if (volume === 1 && issue === 1) {
      alert("已是当前期");
      return;
    }

    if (issue < 1 || issue > 8) {
      alert("不存在这个页面");
      return;
    }

    const url = volume === 1 ? `/issues/${issue}` : `/issues/${volume}-${issue}`;
    router.push(url);
  };

  return (
    <div className="pagination">
      {prevHref ? (
        <Link href={prevHref}>‹ 上一期</Link>
      ) : (
        <a href="#" className="disabled">
          ‹ 上一期
        </a>
      )}

      <span className="current-issue">{currentIssue}</span>

      {nextHref ? (
        <Link href={nextHref}>下一期 ›</Link>
      ) : (
        <a href="#" className="disabled">
          下一期 ›
        </a>
      )}

      <div className="jump-hint">输入格式：卷-期（如 1-2）</div>
      <div className="jump-form">
        <input
          type="text"
          id="issueInput"
          placeholder="1-4"
          maxLength={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") jumpToIssue();
          }}
        />
        <button onClick={jumpToIssue}>跳转</button>
      </div>
    </div>
  );
}
