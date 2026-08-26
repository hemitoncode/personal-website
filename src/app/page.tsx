"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";

const STYLES = `
  .site-root {
    font-family: var(--font-jakarta), -apple-system, sans-serif;
    background-color: #eef0f3;
    background-image:
      linear-gradient(rgba(43,108,240,0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(43,108,240,0.045) 1px, transparent 1px);
    background-size: 28px 28px;
    min-height: 100vh;
    color: #1d1d1f;
  }

  .brand-stripe {
    height: 4px;
    background: linear-gradient(90deg, #2b6cf0, #7fb0ff, #2b6cf0);
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #2b6cf0;
    font-size: 0.85rem;
  }
  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, transparent, #c3cde0, transparent);
  }

  .avatar {
    transition: transform 0.25s cubic-bezier(0.34, 1.5, 0.64, 1);
  }
  .avatar:hover { transform: rotate(-4deg) scale(1.06); }

  .status-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    background: rgba(255,255,255,0.75);
    border: 1px solid #dde3ee;
    border-radius: 999px;
    padding: 0.32rem 0.85rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: #3c4046;
    box-shadow: 0 1px 2px rgba(29,29,31,0.05);
  }
  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
    50% { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
  }

  .stats-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  .stat-num {
    font-family: var(--font-marker), cursive;
    color: #2b6cf0;
    font-size: 1.4rem;
    line-height: 1;
  }
  .stat-label {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #55595f;
    margin-top: 0.35rem;
  }

  .signature {
    font-family: var(--font-marker), cursive;
    color: #2b6cf0;
    font-size: 1.15rem;
    text-align: center;
    margin-top: 1.6rem;
    transform: rotate(-2deg);
  }

  .hello {
    font-family: var(--font-marker), cursive;
    color: #2b6cf0;
    font-size: 1.6rem;
    line-height: 1.2;
  }
  .hello .lead {
    font-family: var(--font-jakarta), sans-serif;
    font-weight: 600;
  }

  .headline {
    font-weight: 700;
    font-size: 1.45rem;
    line-height: 1.4;
    letter-spacing: -0.025em;
    color: #1d1d1f;
  }
  .headline .soft { color: #3c4046; font-weight: 600; }
  .inline-icon {
    display: inline-flex;
    vertical-align: -0.13em;
    margin: 0 0.1em;
  }

  .body-text {
    color: #55595f;
    font-size: 1.05rem;
    line-height: 1.65;
    font-weight: 500;
  }
  .body-link {
    color: #3c4046;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1.5px;
    transition: color 0.15s;
  }
  .body-link:hover { color: #2b6cf0; }
  .accent-link {
    color: #2b6cf0;
    font-weight: 700;
    text-decoration: none;
  }
  .accent-link:hover { text-decoration: underline; text-underline-offset: 3px; }

  .section-title {
    color: #2b6cf0;
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .xp-card {
    position: relative;
    background: #f5f6f8;
    border-radius: 14px;
    padding: 1.4rem 1.75rem 1.5rem;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(29,29,31,0.04);
    border: 1px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .xp-card:hover {
    transform: translateY(-3px);
    border-color: rgba(43,108,240,0.25);
    box-shadow: 0 10px 26px rgba(43,108,240,0.12);
  }
  .xp-card::before {
    content: "";
    position: absolute;
    top: 0; right: 0;
    width: 55%; height: 70%;
    background: radial-gradient(ellipse at top right, rgba(43,108,240,0.4), rgba(43,108,240,0.09) 45%, rgba(43,108,240,0) 70%);
    pointer-events: none;
  }
  .xp-company { font-weight: 800; font-size: 1.15rem; color: #1d1d1f; }
  .xp-meta {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.15rem;
    margin-bottom: 0.8rem;
  }
  .xp-role { font-weight: 700; font-size: 0.92rem; color: #3c4046; }
  .xp-when { font-weight: 700; font-size: 0.92rem; color: #1d1d1f; position: relative; z-index: 1; }
  .xp-desc { color: #55595f; font-size: 0.95rem; line-height: 1.6; font-weight: 500; position: relative; z-index: 1; }
  .xp-skills {
    margin-top: 0.7rem;
    font-size: 0.82rem;
    font-weight: 700;
    color: #3c4046;
    position: relative;
    z-index: 1;
  }
  .xp-skills span { font-weight: 500; color: #55595f; }
  .xp-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.55rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: #2b6cf0;
    text-decoration: none;
    position: relative;
    z-index: 1;
  }
  .xp-link:hover { text-decoration: underline; text-underline-offset: 3px; }

  /* ── macOS-style dock ── */
  .dock {
    position: fixed;
    bottom: 1.1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-end;
    gap: 0.7rem;
    padding: 0.55rem 0.75rem;
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(18px) saturate(1.6);
    -webkit-backdrop-filter: blur(18px) saturate(1.6);
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 1.35rem;
    box-shadow: 0 14px 34px rgba(29, 29, 31, 0.16), inset 0 1px 0 rgba(255,255,255,0.9);
    z-index: 50;
  }
  .dock-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dock-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.4rem;
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.45), 0 3px 8px rgba(29,29,31,0.22);
    transition: transform 0.18s cubic-bezier(0.34, 1.4, 0.64, 1);
    transform-origin: bottom center;
  }
  .dock-item:hover .dock-icon { transform: scale(1.22) translateY(-5px); }
  .dock-label {
    position: absolute;
    bottom: calc(100% + 0.9rem);
    padding: 0.25rem 0.6rem;
    background: rgba(40, 40, 44, 0.85);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 0.45rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s;
  }
  .dock-item:hover .dock-label { opacity: 1; }
  .dock-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(29,29,31,0.4);
    margin-top: 4px;
  }
  .icon-linkedin { background: linear-gradient(180deg, #1a80d4, #0a66c2); }
  .icon-github { background: linear-gradient(180deg, #4a4f57, #24292f); }
  .icon-mail { background: linear-gradient(180deg, #6db2f7, #1f6ff2); }
  .icon-instagram {
    background: radial-gradient(circle at 30% 110%, #fdc468 0%, #f75356 45%, #c13584 75%, #833ab4 100%);
  }
`;

type Experience = {
  company: string;
  role: string;
  when: string;
  desc: string;
};

const experience: Experience[] = [
  {
    company: "Ascendance Foundry",
    role: "Software Engineering Fellow",
    when: "Jun 2026 – Present, Toronto ON",
    desc: "Youngest hire at an AI-native consulting firm. Building Frankie, a bookkeeping app that takes SMBs from bank records to financial reporting — including an ingestion engine for credit card, chequing, and brokerage statements.",
  },
  {
    company: "Miniswap (YC F25)",
    role: "Software Engineering Intern",
    when: "Jan 2026 – May 2026, San Francisco CA",
    desc: "Worked directly with YC founders to help double the product catalogue: built an AI-powered ingestion pipeline with GPT-4o Vision, automated runs with Temporal (~10 hrs/week saved), and shipped a QA agent on the Claude Agent SDK.",
  },
  {
    company: "BYCIG",
    role: "Contract Software Engineer",
    when: "Jun 2025 – Oct 2025, New York NY",
    desc: "Led development of BYCIG MKT, an open-source stock market simulation platform with buying, selling, and shorting of stocks pulled live from the Yahoo Finance API.",
  },
  {
    company: "TEDxMcFarren Boulevard",
    role: "Public Speaker",
    when: "Jun 2025, Mississauga ON",
    desc: "Gave a TEDx talk at the University of Toronto Mississauga campus on how diversity of thought and open debate uphold a free and fair society.",
  },
  {
    company: "Royal Canadian Air Cadets",
    role: "Air Cadet",
    when: "Jan 2023 – Oct 2024, Brampton ON",
    desc: "Based at 758 Argus Squadron. Attended drill, flight meetings, and kept a very well-ironed suit.",
  },
];

type Project = {
  name: string;
  when: string;
  desc: string;
  skills: string;
  link: { label: string; url: string } | null;
};

const projects: Project[] = [
  {
    name: "DailySAT",
    when: "Aug 2024 – Sep 2025",
    desc: "A platform to help students prepare for the SAT via a question bank, with a gamified experience of in-game credits and awards to amplify engagement. Over 100,000 lifetime visitors and ~200 daily active users.",
    skills: "Next.js, MongoDB, Redis",
    link: { label: "GitHub repo", url: "https://github.com/hemitoncode/DailySAT" },
  },
  {
    name: "Talem",
    when: "Jun 2024 – Aug 2025",
    desc: "A platform that empowers students with information on internships, college admissions, and extracurricular opportunities. Over 200,000 lifetime visitors and funding raised from Emergent Ventures.",
    skills: "React.js, Firebase",
    link: { label: "Visit site", url: "https://talem.org" },
  },
  {
    name: "Trashify",
    when: "Jul 2024 – Aug 2024",
    desc: "An app that finds the nearest trash bins to your location. Implemented a caching system to save API calls to an external service, which optimized response times too.",
    skills: "Next.js, Python, RPC",
    link: { label: "GitHub repo", url: "https://github.com/Hemit99123/trashify" },
  },
  {
    name: "Everyone Classroom",
    when: "Jun 2023 – Feb 2024",
    desc: "An LMS system geared towards STEM students, built for Everyone STEM.",
    skills: "JavaScript",
    link: null,
  },
];

const dockLinks = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hemitvpatel/",
    icon: <FaLinkedinIn />,
    tile: "icon-linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/hemitoncode",
    icon: <FaGithub />,
    tile: "icon-github",
  },
  {
    label: "Email",
    url: "mailto:hemitvpatel@gmail.com",
    icon: <IoMail />,
    tile: "icon-mail",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/hemitoncode",
    icon: <FaInstagram />,
    tile: "icon-instagram",
  },
];

function TorontoClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-CA", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Toronto",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>📍 Toronto, Canada{time ? ` · ${time}` : ""}</span>;
}

const stats = [
  { num: "200k+", label: "Students reached" },
  { num: "2", label: "Startup gigs" },
  { num: "1", label: "TEDx talk" },
  { num: "10+", label: "Hrs/week automated" },
];

function Dock() {
  return (
    <nav className="dock" aria-label="Social links">
      {dockLinks.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="dock-item"
          aria-label={l.label}
        >
          <span className="dock-label">{l.label}</span>
          <span className={`dock-icon ${l.tile}`}>{l.icon}</span>
          <span className="dock-dot" />
        </a>
      ))}
    </nav>
  );
}

export default function HemitPatel() {
  return (
    <>
      <style>{STYLES}</style>
      <div className="site-root">
        <div className="brand-stripe" />

        <main className="max-w-[620px] mx-auto px-6 pt-24 pb-40">
          {/* ── Hero ── */}
          <Image
            src="/hemitpatel.png"
            alt="Hemit Patel"
            width={1000}
            height={1000}
            className="avatar w-20 h-20 object-cover rounded-full mb-5 ring-2 ring-[#2b6cf0]/30"
          />

          <div className="status-row">
            <span className="chip">
              <span className="pulse-dot" />
              Building Frankie @ Ascendance Foundry
            </span>
            <span className="chip">
              <TorontoClock />
            </span>
          </div>

          <p className="hello mb-3">
            <span className="lead">Hey, I&apos;m</span> Hemit Patel!
          </p>

          <h1 className="headline mb-6">
            I&apos;m a Grade 12 developer{" "}
            <span className="soft">building</span>{" "}
            <span className="inline-icon"><FaGithub /></span>{" "}
            impactful, AI-driven software{" "}
            <span className="soft">emphasizing</span>{" "}
            <span className="inline-icon" style={{ color: "#2b6cf0" }}><HiSparkles /></span>{" "}
            automation, agents, and thoughtful design.
          </h1>

          <p className="body-text mb-5">
            Whether it&apos;s{" "}
            <a href="https://miniswap.gg" target="_blank" rel="noreferrer" className="body-link">
              shipping at YC-backed startups
            </a>{" "}
            or{" "}
            <a href="https://github.com/hemitoncode" target="_blank" rel="noreferrer" className="body-link">
              working on personal projects
            </a>
            , I focus on turning manual processes into self-running systems.
          </p>

          <p className="body-text mb-10">
            I&apos;m also a{" "}
            <a
              href="https://www.youtube.com/watch?v=D0RVK4iU9q4"
              target="_blank"
              rel="noreferrer"
              className="accent-link"
            >
              TEDx speaker
            </a>
            , and these days I&apos;m building at{" "}
            <span className="accent-link">Ascendance Foundry</span>, an AI-native
            consulting firm where I&apos;m the youngest hire on the team (reach out if
            you&apos;re curious!).
          </p>

          <div className="stats-row">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="divider mb-10"><HiSparkles /></div>

          {/* ── Work experience ── */}
          <h2 className="section-title">Current + Previous Work Experience</h2>

          <div className="space-y-4">
            {experience.map((xp) => (
              <article key={xp.company} className="xp-card">
                <h3 className="xp-company">{xp.company}</h3>
                <div className="xp-meta">
                  <span className="xp-role">{xp.role}</span>
                  <span className="xp-when">{xp.when}</span>
                </div>
                <p className="xp-desc">{xp.desc}</p>
              </article>
            ))}
          </div>

          <div className="divider mt-12 mb-10"><HiSparkles /></div>

          {/* ── Projects ── */}
          <h2 className="section-title">Projects</h2>

          <div className="space-y-4">
            {projects.map((p) => (
              <article key={p.name} className="xp-card">
                <h3 className="xp-company">{p.name}</h3>
                <div className="xp-meta">
                  <span className="xp-when">{p.when}</span>
                </div>
                <p className="xp-desc">{p.desc}</p>
                <p className="xp-skills">
                  Skills: <span>{p.skills}</span>
                </p>
                {p.link && (
                  <a href={p.link.url} target="_blank" rel="noreferrer" className="xp-link">
                    {p.link.label} <FiArrowUpRight />
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="divider mt-12 mb-8"><HiSparkles /></div>

          <p className="body-text" style={{ fontSize: "0.9rem", textAlign: "center" }}>
            Find me around the web{" "}
            <span className="inline-icon" style={{ color: "#2b6cf0" }}><FiArrowUpRight /></span>{" "}
            or say hi at{" "}
            <a href="mailto:hemitvpatel@gmail.com" className="body-link">
              hemitvpatel@gmail.com
            </a>
          </p>

          <p className="signature">— built by Hemit, one commit at a time ✌️</p>
        </main>

        <Dock />
      </div>
    </>
  );
}
