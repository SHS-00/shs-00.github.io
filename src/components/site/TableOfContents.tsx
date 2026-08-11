import { TOCSection } from "@/types/journal";

export function TableOfContents({
  heading,
  sections,
}: {
  heading: string;
  sections: TOCSection[];
}) {
  return (
    <div className="content-box">
      <h3>{heading}</h3>
      <ul className="toc-list">
        {sections.map((section, i) => [
          <li key={`cat-${i}`} className="category">
            {section.category}
          </li>,
          ...section.items.map((item, j) => (
            <li key={`item-${i}-${j}`} className="item" data-num="">
              <span className="title">{item.title}</span>
              {item.author && (
                <span className="author">
                  {item.author}
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      style={{ color: "#0052a3" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      （点击下载 pdf）
                    </a>
                  )}
                </span>
              )}
            </li>
          )),
        ])}
      </ul>
    </div>
  );
}
