import Link from "next/link";
import { searchWebsite } from "../../data/search-index";
import "./search-page.css";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? searchWebsite(query) : [];

  return (
    <section className="site-search-page">
      <div className="site-container">
        <header className="site-search-heading">
          <span className="site-search-kicker">CFSL Hyderabad</span>
          <h1>Website Search</h1>
          {query ? (
            <p>
              {results.length} {results.length === 1 ? "result" : "results"} for{" "}
              <strong>“{query}”</strong>
            </p>
          ) : (
            <p>Enter a keyword in the search box above to explore the website.</p>
          )}
        </header>

        {results.length > 0 ? (
          <div className="site-search-results" aria-live="polite">
            {results.map((result, index) => (
              <article
                className="site-search-result"
                key={`${result.href}-${result.title}-${index}`}
              >
                <span className="site-search-result-category">{result.category}</span>
                <h2>
                  <Link href={result.href}>{result.title}</Link>
                </h2>
                {result.description && <p>{result.description}</p>}
                <Link className="site-search-result-link" href={result.href}>
                  Visit page <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : query ? (
          <div className="site-search-empty">
            <span aria-hidden="true">⌕</span>
            <h2>No matching results found</h2>
            <p>
              Try a different keyword or a shorter phrase. Search checks page
              titles, descriptions, navigation items, divisions, notices and
              available public resources.
            </p>
          </div>
        ) : (
          <div className="site-search-empty">
            <span aria-hidden="true">⌕</span>
            <h2>Search the website</h2>
            <p>Use the search field in the main navigation to get started.</p>
          </div>
        )}
      </div>
    </section>
  );
}
