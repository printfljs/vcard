import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import FilterSelectBox from "@/components/portfolio/filter-select-box";
import FilterList from "@/components/portfolio/filter-list";
import MarkdownRenderer from "@/components/markdown/markdown-renderer";
import { getPortfolioPosts } from "@/lib/db/portfolio";
import config from "@/config";
import { LuEye } from "react-icons/lu";

const { title } = config;
const POSTS_PER_PAGE = 9;

export const metadata = {
  title: `Portfolio | ${title}`,
  description: "Read my thoughts on software development, design, and more.",
};

export default async function Portfolio({ searchParams }: {
  readonly searchParams: { tag?: string; page?: string };
}) {
  const allPortfolioPosts = await getPortfolioPosts();
  const blogTags = [
    "All",
    ...Array.from(
      new Set(allPortfolioPosts.map((post) => post.metadata.category ?? ""))
    ),
  ];
  const selectedTag = searchParams.tag || "All";
  const currentPage = parseInt(searchParams.page || "1", 10);

  // Filter blogs based on the selected tag
  const filteredPortfolioPosts =
    selectedTag === "All"
      ? allPortfolioPosts
      : allPortfolioPosts.filter((post) => post.metadata.category === selectedTag);

  // Sort blogs by date
  const sortedPortfolioPosts = filteredPortfolioPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedPortfolioPosts.length / POSTS_PER_PAGE);

  // Get blogs for current page
  const paginatedPortfolioPosts = sortedPortfolioPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <article>
      <PageHeader header="Hugo's Portfolio" />
      <section className="projects">
        <FilterList selectedTag={selectedTag} blogTags={blogTags} />
        <FilterSelectBox selectedTag={selectedTag} blogTags={blogTags} />
        <ul className="project-list">
          {paginatedPortfolioPosts.map((post, index) => (
            <li
              key={index}
              className="project-item active"
              data-category={post.metadata.category}
            >
              <Link href={`/portfolio/${post.slug}`} rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <LuEye />
                  </div>
                  <Image
                    src={post.metadata.banner}
                    alt={post.metadata.alt || "Portfolio post image"}
                    width={1600}
                    height={900}
                    priority={true}
                    placeholder="blur"
                    loading="eager"
                    blurDataURL="https://docs.1chooo.com/images/cover-with-1chooo-com.png"
                  />
                </figure>
                <h3 className="project-title"><MarkdownRenderer content={post.metadata.title} /></h3>
                <p className="project-category">{post.metadata.category}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Link
                key={pageNum}
                href={{
                  pathname: "/portfolio",
                  query: { tag: selectedTag, page: pageNum.toString() },
                }}
                className={`pagination-btn ${pageNum === currentPage ? "active" : ""}`}
              >
                {pageNum}
              </Link>
            )
          )}
        </div>
      </section>
    </article>
  );
}

