import { notFound } from "next/navigation";
import { CoverSection } from "@/components/site/CoverSection";
import { TableOfContents } from "@/components/site/TableOfContents";
import { IssuePagination } from "@/components/site/IssuePagination";
import { getIssue } from "@/data/issues";

export default async function IssuePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idRaw } = await params;
  const id = parseInt(idRaw, 10);
  const issue = getIssue(id);

  if (!issue || Number.isNaN(id)) {
    notFound();
  }

  const prevHref = id > 1 ? `/issues/${id - 1}` : undefined;
  const nextHref = id < 4 ? `/issues/${id + 1}` : undefined;

  return (
    <>
      <main className="main-content">
        <CoverSection coverSrc={issue.cover} />
        <TableOfContents heading={issue.heading} sections={issue.sections} />
      </main>
      <IssuePagination
        currentIssue={`第一卷 第${id}期`}
        prevHref={prevHref}
        nextHref={nextHref}
      />
    </>
  );
}
