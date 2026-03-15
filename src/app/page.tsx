"use client";

import Image from "next/image";
import React, { useState } from "react";

type Page = "home" | "projects" | "contact";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lato:wght@300;400;700&display=swap');

  .profile-root {
    font-family: 'Lato', sans-serif;
    background-color: #F7F5F0;
    min-height: 100vh;
  }
  .profile-name {
    font-family: 'DM Serif Display', serif;
    color: #1C1917;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }
  .section-label {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #9C8A74;
  }
  .section-divider {
    height: 1px;
    background: #E0D9CF;
    margin: 0.75rem 0 1.5rem 0;
  }
  .profile-link {
    color: #B5633A;
    text-decoration: none;
    border-bottom: 1px solid #B5633A44;
    transition: border-color 0.2s, color 0.2s;
    padding-bottom: 1px;
  }
  .profile-link:hover {
    color: #8C4A2A;
    border-color: #8C4A2A;
  }
  .bullet-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    color: #3D3530;
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 300;
  }
  .bullet-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #B5633A;
    margin-top: 0.65rem;
    flex-shrink: 0;
  }
  .yc-badge {
    color: #F0652F;
    font-weight: 700;
  }
  .nav-link {
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;
    color: #9C8A74;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.15s;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
  }
  .nav-link:hover {
    color: #1C1917;
  }
  .nav-link.active {
    color: #1C1917;
  }
  .nav-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #C9BFB3;
    display: inline-block;
  }
  .project-card {
    border: 1px solid #E0D9CF;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    background: #FDFCFA;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .project-card:hover {
    border-color: #B5633A44;
    box-shadow: 0 2px 12px rgba(181,99,58,0.07);
  }
  .project-title {
    font-family: 'DM Serif Display', serif;
    color: #1C1917;
    font-size: 1.15rem;
    margin-bottom: 0.3rem;
  }
  .project-desc {
    color: #6B5F55;
    font-size: 0.9rem;
    line-height: 1.65;
    font-weight: 300;
  }
  .tag {
    display: inline-block;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.2rem 0.55rem;
    border-radius: 3px;
    background: #EDE8E0;
    color: #9C8A74;
  }
  .tag-live {
    background: #E8F0E8;
    color: #5A7A5A;
  }
  .tag-yc {
    background: #FDEEE7;
    color: #B5633A;
  }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem;
    color: #1C1917;
    line-height: 1;
  }
  .stat-label {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #9C8A74;
    font-weight: 700;
    margin-top: 0.2rem;
  }
  .contact-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid #E0D9CF;
    color: #3D3530;
    font-size: 0.95rem;
    font-weight: 300;
  }
  .contact-icon {
    width: 1.5rem;
    text-align: center;
    color: #9C8A74;
    font-size: 1rem;
    flex-shrink: 0;
  }
  .page-enter {
    animation: fadeUp 0.25s ease forwards;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

// ── Shared header shown on every page ──────────────────────────────────────
function Header({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  return (
    <div className="mb-12">
      <Image
        src="/hemitpatel.png"
        alt="Hemit Patel"
        width={1000}
        height={1000}
        className="w-20 h-20 object-cover rounded-full mb-8 grayscale"
      />
      <h1 className="profile-name text-6xl mb-3">Hemit Patel</h1>
      <p style={{ color: "#9C8A74", fontSize: "0.95rem", fontWeight: 300, letterSpacing: "0.01em", marginBottom: "1.5rem" }}>
        Builder · Educator · Tinkerer
      </p>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        {(["home", "projects", "contact"] as Page[]).map((p, i) => (
          <React.Fragment key={p}>
            {i > 0 && <span className="nav-dot" />}
            <button
              className={`nav-link${page === p ? " active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          </React.Fragment>
        ))}
        <span className="nav-dot" />
        <a
          href="https://github.com/hemitoncode"
          target="_blank"
          className="nav-link"
        >
          github ↗
        </a>
      </nav>
    </div>
  );
}

// ── Home page ──────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <div className="page-enter">
      <section className="mb-10">
        <p className="section-label">Currently</p>
        <div className="section-divider" />
        <ul className="space-y-5">
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Building{" "}
              <a href="https://nextvoters.com" target="_blank" className="profile-link">Next Voters</a>
              , the world&apos;s first website to leverage AI to help you become a more informed voter.
            </span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Developing the{" "}
              <a href="https://instagram.com/hemitonwrld" target="_blank" className="profile-link">hemitonworld</a>{" "}
              Instagram brand — bite-sized coding, AI, and life tips for beginners.
            </span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Software Engineering Intern at{" "}
              <span className="yc-badge">YC</span>-backed{" "}
              <a href="https://miniswap.gg" target="_blank" className="profile-link">Miniswap</a>
              , an online miniature marketplace.
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <p className="section-label">Interested In</p>
        <div className="section-divider" />
        <ul className="space-y-5">
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>Upholding democratic values by making information more accessible using Artificial Intelligence.</span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>Teaching others how to code and leverage AI to improve their lives and careers.</span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>Random hardware tinkering, product development, and AI research.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <p className="section-label">Past</p>
        <div className="section-divider" />
        <ul className="space-y-5">
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Built{" "}
              <a href="https://dailysat.org" target="_blank" className="profile-link">a free SAT prep platform</a>{" "}
              used by thousands of students worldwide — 80k+ lifetime visitors.
            </span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Gave a{" "}
              <a href="https://www.youtube.com/watch?v=D0RVK4iU9q4" target="_blank" className="profile-link">TEDx talk</a>{" "}
              on the importance of diverse thought within a society.
            </span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Developed tech at{" "}
              <a href="https://talem.org" target="_blank" className="profile-link">Talem</a>{" "}
              to help students discover college and internship opportunities.
            </span>
          </li>
          <li className="bullet-item">
            <span className="bullet-dot" />
            <span>
              Completed a software engineering internship at prop-tech startup{" "}
              <a href="https://ghar-mates-web.vercel.app/" target="_blank" className="profile-link">GharMates</a>.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

// ── Projects page ──────────────────────────────────────────────────────────
type Stat = { num: string; label: string };
type Project = {
  name: string;
  url: string | null;
  repo: string | null;
  desc: string;
  tags: string[];
  stats: Stat[] | null;
};

const projects: Project[] = [
  {
    name: "Next Voters",
    url: "https://nextvoters.com",
    repo: "https://github.com/hemitoncode",
    desc: "The world's first AI-powered platform to help citizens become informed voters. Surfaces ballot summaries, candidate positions, and civic context — all in plain language.",
    tags: ["TypeScript", "AI", "Live"],
    stats: null,
  },
  {
    name: "DailySAT",
    url: "https://dailysat.org",
    repo: "https://github.com/hemitoncode/dailysat",
    desc: "Free, open-source SAT prep platform built with Next.js, MongoDB, Redis, and Auth.js. Features an AI study planner, question bank, and community-driven contributions.",
    tags: ["TypeScript", "Next.js", "Open Source", "Live"],
    stats: [{ num: "80k+", label: "Visitors" }, { num: "$600", label: "Funded" }, { num: "11", label: "Forks" }],
  },
  {
    name: "StockSavvy",
    url: null,
    repo: "https://github.com/Hemit99123/stocksavvy-frontend",
    desc: "Full-stack stock analytics platform featuring a custom role-based session authentication system and a production-grade Node.js backend built from scratch.",
    tags: ["TypeScript", "Node.js", "Finance"],
    stats: null,
  },
  {
    name: "Talem AI",
    url: "https://talem.org",
    repo: "https://github.com/Hemit99123/talemai",
    desc: "FastAPI-powered RAG server helping students surface college and internship opportunities. Includes a CLI admin tool for managing the knowledge base.",
    tags: ["Python", "FastAPI", "RAG", "Live"],
    stats: [{ num: "200k+", label: "Users" }, { num: "$3k", label: "Funded" }],
  },
  {
    name: "Trashify",
    url: null,
    repo: "https://github.com/Hemit99123",
    desc: "Performance-focused backend project achieving sub-30ms API response times. Explored database optimization strategies and efficient data retrieval patterns.",
    tags: ["TypeScript", "Performance"],
    stats: [{ num: "30ms", label: "API Response" }],
  },

];

function ProjectsPage() {
  return (
    <div className="page-enter">
      <section className="mb-10">
        <p className="section-label">Projects</p>
        <div className="section-divider" />
        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <p className="project-title">{p.name}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span key={t} className={`tag${t === "Live" ? " tag-live" : t === "YC F25" ? " tag-yc" : ""}`}>{t}</span>
                  ))}
                </div>
              </div>
              <p className="project-desc" style={{ marginBottom: "0.9rem" }}>{p.desc}</p>

              {p.stats && (
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "0.9rem" }}>
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <div className="stat-num">{s.num}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: "flex", gap: "1rem" }}>
                {p.url && (
                  <a href={p.url} target="_blank" className="profile-link" style={{ fontSize: "0.82rem" }}>
                    Visit site ↗
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" className="profile-link" style={{ fontSize: "0.82rem" }}>
                    View repo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Contact page ───────────────────────────────────────────────────────────
const contactLinks = [
  { icon: "⌥", label: "GitHub", handle: "@hemitoncode", url: "https://github.com/hemitoncode" },
  { icon: "◎", label: "Instagram", handle: "@hemitonwrld", url: "https://instagram.com/hemitonwrld" },
  { icon: "▶", label: "YouTube / TEDx", handle: "Diverse Thoughts in Society", url: "https://www.youtube.com/watch?v=D0RVK4iU9q4" },
  { icon: "◈", label: "LinkedIn", handle: "Hemit Patel", url: "https://www.linkedin.com/in/hemit-patel-383ab3271/" },
  { icon: "◻", label: "Next Voters", handle: "nextvoters.com", url: "https://nextvoters.com" },
  { icon: "◌", label: "DailySAT", handle: "dailysat.org", url: "https://dailysat.org" },
];

function ContactPage() {
  return (
    <div className="page-enter">
      <section className="mb-10">
        <p className="section-label">Get in touch</p>
        <div className="section-divider" />
        <p style={{ color: "#3D3530", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.5rem" }}>
          I&apos;m always open to collaborating on interesting projects, especially at the intersection of AI and civic tech. The best way to reach me is through GitHub or Instagram.
        </p>
        <div>
          {contactLinks.map((l) => (
            <a key={l.label} href={l.url} target="_blank" style={{ textDecoration: "none" }}>
              <div className="contact-row">
                <span className="contact-icon">{l.icon}</span>
                <span style={{ color: "#9C8A74", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, width: "7rem", flexShrink: 0 }}>{l.label}</span>
                <span className="profile-link" style={{ fontSize: "0.9rem" }}>{l.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────
export default function HemitPatel() {
  const [page, setPage] = useState<Page>("home");

  return (
    <>
      <style>{STYLES}</style>
      <div className="profile-root">
        <div className="max-w-2xl mx-auto px-8 py-16">
          <Header page={page} setPage={setPage} />
          {page === "home"     && <HomePage />}
          {page === "projects" && <ProjectsPage />}
          {page === "contact"  && <ContactPage />}
        </div>
      </div>
    </>
  );
}
