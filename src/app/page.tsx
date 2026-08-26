"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaBookOpen,
  FaGraduationCap,
  FaRecycle,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowUp } from "react-icons/fi";

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

  /* ── macOS-style dock ── */
  .dock {
    position: fixed;
    bottom: 1.1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-end;
    gap: 0.85rem;
    padding: 0.65rem 0.9rem;
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
    border-radius: 28%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.45), 0 3px 8px rgba(29,29,31,0.22);
    transition: width 0.1s ease-out, height 0.1s ease-out, font-size 0.1s ease-out;
    will-change: width, height;
  }
  .icon-linkedin { background: linear-gradient(180deg, #1a80d4, #0a66c2); }
  .icon-github { background: linear-gradient(180deg, #4a4f57, #24292f); }
  .icon-mail { background: linear-gradient(180deg, #6db2f7, #1f6ff2); }
  .icon-instagram {
    background: radial-gradient(circle at 30% 110%, #fdc468 0%, #f75356 45%, #c13584 75%, #833ab4 100%);
  }
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
  .corner-btn {
    position: fixed;
    bottom: 1.3rem;
    right: 1.3rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background: #1d1d1f;
    color: #fff;
    font-size: 1.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(29,29,31,0.25);
    transition: transform 0.15s, background 0.15s;
    z-index: 50;
  }
  .corner-btn:hover { transform: translateY(-3px); background: #2b6cf0; }
  .dock-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(29,29,31,0.4);
    margin-top: 4px;
  }
  /* ── Project cards ── */
  .section-sub {
    color: #55595f;
    font-size: 0.95rem;
    font-weight: 500;
    margin: -0.75rem 0 1.25rem;
  }
  .proj-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.1rem;
  }
  @media (max-width: 560px) {
    .proj-grid { grid-template-columns: 1fr; }
  }
  .proj-card {
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    overflow: hidden;
    background: #f5f6f8;
    border: 1px solid #e7eaf0;
    box-shadow: 0 1px 2px rgba(29,29,31,0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .proj-card:hover {
    transform: translateY(-3px);
    border-color: rgba(43,108,240,0.3);
    box-shadow: 0 10px 26px rgba(43,108,240,0.12);
  }
  .proj-top {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 2.4rem 1rem 1.5rem;
    background-image: repeating-linear-gradient(
      45deg,
      rgba(43,108,240,0.06) 0 2px,
      transparent 2px 11px
    );
  }
  .proj-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: #3c4046;
    color: #fff;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.38rem 0.85rem;
    border-radius: 9px;
    text-decoration: none;
    transition: background 0.15s, transform 0.15s;
  }
  .proj-btn:hover { background: #2b6cf0; transform: translateY(-1px); }
  .proj-icon {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.45), 0 4px 10px rgba(29,29,31,0.18);
    transition: transform 0.2s cubic-bezier(0.34, 1.4, 0.64, 1);
  }
  .proj-card:hover .proj-icon { transform: scale(1.12) translateY(-3px); }
  .proj-name { font-weight: 800; font-size: 1.02rem; }
  .proj-bottom {
    flex: 1;
    background: #e9ecf1;
    padding: 0.95rem 1.15rem 1.05rem;
    font-size: 0.84rem;
    font-weight: 500;
    color: #55595f;
    line-height: 1.55;
  }
  .proj-when {
    font-size: 0.72rem;
    font-weight: 700;
    color: #3c4046;
    margin-bottom: 0.35rem;
  }
  .tile-blue { background: linear-gradient(180deg, #4f8df7, #2b6cf0); }
  .tile-purple { background: linear-gradient(180deg, #a78bfa, #7c3aed); }
  .tile-green { background: linear-gradient(180deg, #4ade80, #16a34a); }
  .tile-amber { background: linear-gradient(180deg, #fbbf24, #d97706); }

  /* ── Reach out form ── */
  .contact-card {
    background: #f5f6f8;
    border: 1px solid #e7eaf0;
    border-radius: 16px;
    padding: 1.6rem;
    box-shadow: 0 1px 2px rgba(29,29,31,0.04);
  }
  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }
  .form-field {
    flex: 1;
    min-width: 200px;
    background: #fff;
    border: 1.5px solid #d5dbe6;
    border-radius: 10px;
    padding: 0.65rem 0.9rem;
    font-size: 0.9rem;
    font-family: inherit;
    font-weight: 500;
    color: #1d1d1f;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .form-field::placeholder { color: #9aa1ac; }
  .form-field:focus {
    outline: none;
    border-color: #2b6cf0;
    box-shadow: 0 0 0 3px rgba(43,108,240,0.15);
  }
  textarea.form-field { width: 100%; resize: vertical; min-height: 90px; }
  .submit-btn {
    display: block;
    margin: 0.9rem auto 0;
    background: #2b6cf0;
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.6rem 1.6rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
  }
  .submit-btn:hover {
    background: #1f5cd9;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(43,108,240,0.3);
  }
  .form-hint {
    text-align: center;
    font-size: 0.72rem;
    font-weight: 600;
    color: #9aa1ac;
    margin-top: 0.7rem;
  }

  .watermark {
    font-weight: 800;
    font-size: clamp(2.6rem, 11vw, 6rem);
    line-height: 0.9;
    white-space: nowrap;
    text-align: center;
    letter-spacing: -0.05em;
    margin-top: 2.5rem;
    user-select: none;
    color: transparent;
    background: linear-gradient(180deg, rgba(43,108,240,0.16), rgba(43,108,240,0));
    -webkit-background-clip: text;
    background-clip: text;
    pointer-events: none;
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
];

type Project = {
  name: string;
  when: string;
  desc: string;
  skills: string;
  link: string | null;
  icon: React.ReactNode;
  tile: string;
};

const projects: Project[] = [
  {
    name: "DailySAT",
    when: "Aug 2024 – Sep 2025",
    desc: "A platform to help students prepare for the SAT via a question bank, with a gamified experience of in-game credits and awards. Over 100,000 lifetime visitors and ~200 daily active users.",
    skills: "Next.js, MongoDB, Redis",
    link: "https://github.com/hemitoncode/DailySAT",
    icon: <FaBookOpen />,
    tile: "tile-blue",
  },
  {
    name: "Talem",
    when: "Jun 2024 – Aug 2025",
    desc: "A platform that empowers students with information on internships, college admissions, and extracurricular opportunities. Over 200,000 lifetime visitors and funding raised from Emergent Ventures.",
    skills: "React.js, Firebase",
    link: "https://talem.org",
    icon: <FaGraduationCap />,
    tile: "tile-purple",
  },
  {
    name: "Trashify",
    when: "Jul 2024 – Aug 2024",
    desc: "An app that finds the nearest trash bins to your location. Implemented a caching system to save API calls to an external service, which optimized response times too.",
    skills: "Next.js, Python, RPC",
    link: "https://github.com/Hemit99123/trashify",
    icon: <FaRecycle />,
    tile: "tile-green",
  },
  {
    name: "Everyone Classroom",
    when: "Jun 2023 – Feb 2024",
    desc: "An LMS system geared towards STEM students, built for Everyone STEM.",
    skills: "JavaScript",
    link: null,
    icon: <FaChalkboardTeacher />,
    tile: "tile-amber",
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
    url: "mailto:hemit.patel.ca@gmail.com",
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

const DOCK_BASE = 58; // resting icon size in px
const DOCK_GROW = 36; // extra px at the cursor

function Dock() {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // macOS-style magnification: icons resize in layout (not transform),
  // so the bar itself widens and neighbours get pushed apart as sizes
  // grade with cursor distance.
  const sizeFor = (i: number) => {
    if (mouseX === null) return DOCK_BASE;
    const el = itemRefs.current[i];
    if (!el) return DOCK_BASE;
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - center);
    const range = 150;
    if (distance > range) return DOCK_BASE;
    return DOCK_BASE + DOCK_GROW * Math.cos((distance / range) * (Math.PI / 2));
  };

  return (
    <nav
      className="dock"
      aria-label="Social links"
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(null)}
    >
      {dockLinks.map((l, i) => {
        const s = sizeFor(i);
        return (
          <a
            key={l.label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="dock-item"
            aria-label={l.label}
          >
            <span className="dock-label">{l.label}</span>
            <span
              className={`dock-icon ${l.tile}`}
              style={{ width: s, height: s, fontSize: s * 0.46 }}
            >
              {l.icon}
            </span>
            <span className="dock-dot" />
          </a>
        );
      })}
    </nav>
  );
}

function ScrollTopButton() {
  return (
    <button
      className="corner-btn"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FiArrowUp />
    </button>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hey Hemit — ${name || "someone from your website"}`
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:hemit.patel.ca@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-card" onSubmit={submit}>
      <div className="form-row">
        <input
          className="form-field"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className="form-field"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
      <p className="form-hint">
        No servers, no tracking — this just opens your mail app ✌️
      </p>
    </form>
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
            src="/headshot.png"
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
          <p className="section-sub">Some things I&apos;ve developed over the past few years:</p>

          <div className="proj-grid">
            {projects.map((p) => (
              <article key={p.name} className="proj-card">
                <div className="proj-top">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="proj-btn">
                      View Project
                    </a>
                  )}
                  <span className={`proj-icon ${p.tile}`}>{p.icon}</span>
                  <span className="proj-name">{p.name}</span>
                </div>
                <div className="proj-bottom">
                  <p className="proj-when">{p.when} · {p.skills}</p>
                  {p.desc}
                </div>
              </article>
            ))}
          </div>

          <div className="divider mt-12 mb-10"><HiSparkles /></div>

          {/* ── Reach out ── */}
          <h2 className="section-title">Reach Out!</h2>
          <p className="body-text mb-6">
            I love learning about what others are building — feel free to reach
            out through the form below, or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/hemitvpatel/"
              target="_blank"
              rel="noreferrer"
              className="body-link"
            >
              LinkedIn
            </a>
            .
          </p>

          <ContactForm />

          <p className="signature">— built by Hemit, one commit at a time ✌️</p>

          <div className="watermark" aria-hidden="true">Hemit Patel</div>
        </main>

        <Dock />
        <ScrollTopButton />
      </div>
    </>
  );
}
