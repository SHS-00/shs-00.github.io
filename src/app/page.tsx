import { CoverSection } from "@/components/site/CoverSection";
import { TableOfContents } from "@/components/site/TableOfContents";
import { homeSections } from "@/data/issues";

export default function Home() {
  return (
    <>
      <main className="main-content">
        <CoverSection coverSrc="/images/cover1.jpg" />
        <TableOfContents heading="2026年1月 总第一卷第3期目录" sections={homeSections} />
      </main>
    </>
  );
}
