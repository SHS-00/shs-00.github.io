import Link from "next/link";

const SUBMIT_URL = "https://v.wjx.cn/vm/rrpLSSZ.aspx#";

export function CoverSection({ coverSrc }: { coverSrc: string }) {
  return (
    <div className="left-column">
      <img src={coverSrc} alt="期刊封面" className="cover-image" />
      <Link
        href={SUBMIT_URL}
        className="submit-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        在线投稿
      </Link>
    </div>
  );
}
