import Link from "next/link";
import { searchWebsite } from "../../data/search-index";
import { searchText as s, resultsLine } from "../../data/search-i18n";
import { footerText as f } from "../../data/ui-text";
import { hm } from "../../data/home-i18n";
import { getLang } from "../../lib/i18n-server";
import "./search-page.css";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const lang = await getLang();
  const query = q.trim();
  const results = query ? searchWebsite(query, lang) : [];
  const line = resultsLine(results.length, lang);

  return (
    <section className="site-search-page">
      <div className="site-container">
        <header className="site-search-heading">
          <span className="site-search-kicker">{f.org[lang]}</span>
          <h1>{s.heading[lang]}</h1>
          {query ? (
            <p>
              {line.before}
              <strong>“{query}”</strong>
              {line.after}
            </p>
          ) : (
            <p>{s.enterKeyword[lang]}</p>
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
                  {s.visitPage[lang]} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : query ? (
          <div className="site-search-empty">
            <span aria-hidden="true">⌕</span>
            <h2>{hm.noMatch[lang]}</h2>
            <p>{s.emptyText[lang]}</p>
          </div>
        ) : (
          <div className="site-search-empty">
            <span aria-hidden="true">⌕</span>
            <h2>{s.searchTitle[lang]}</h2>
            <p>{s.searchHint[lang]}</p>
          </div>
        )}
      </div>
    </section>
  );
}