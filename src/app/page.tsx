import Image from "next/image";
import React from "react";

export default function HemitPatel() {
  return (
    <>
      <style>{`
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
      `}</style>

      <div className="profile-root">
        <div className="max-w-2xl mx-auto px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <Image
              src="/hemitpatel.png"
              alt="Hemit Patel"
              width={1000}
              height={1000}
              className="w-20 h-20 object-cover rounded-full mb-8 grayscale"
            />
            <h1 className="profile-name text-6xl mb-3">Hemit Patel</h1>
            <p style={{ color: "#9C8A74", fontSize: "0.95rem", fontWeight: 300, letterSpacing: "0.01em" }}>
              Builder · Educator · Tinkerer
            </p>
          </div>

          {/* Currently */}
          <section className="mb-10">
            <p className="section-label">Currently</p>
            <div className="section-divider" />
            <ul className="space-y-5">
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Building{" "}
                  <a href="https://nextvoters.com" target="_blank" className="profile-link">
                    Next Voters
                  </a>
                  , the world&apos;s first website to leverage AI to help you become a more informed voter.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Developing the{" "}
                  <a href="https://instagram.com/hemitonwrld" target="_blank" className="profile-link">
                    hemitonworld
                  </a>{" "}
                  Instagram brand — bite-sized coding, AI, and life tips for beginners.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Software Engineering Intern at{" "}
                  <span className="yc-badge">YC</span>-backed{" "}
                  <a href="https://miniswap.gg" target="_blank" className="profile-link">
                    Miniswap
                  </a>
                  , an online miniature marketplace.
                </span>
              </li>
            </ul>
          </section>

          {/* Interested In */}
          <section className="mb-10">
            <p className="section-label">Interested In</p>
            <div className="section-divider" />
            <ul className="space-y-5">
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Upholding democratic values by making information more accessible using Artificial Intelligence.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Teaching others how to code and leverage AI to improve their lives and careers.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>Random hardware tinkering, product development, and AI research.</span>
              </li>
            </ul>
          </section>

          {/* Past */}
          <section className="mb-10">
            <p className="section-label">Past</p>
            <div className="section-divider" />
            <ul className="space-y-5">
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Built{" "}
                  <a href="https://dailysat.org" target="_blank" className="profile-link">
                    a free SAT prep platform
                  </a>{" "}
                  used by thousands of students worldwide — 80k+ lifetime visitors.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Gave a{" "}
                  <a
                    href="https://www.youtube.com/watch?v=D0RVK4iU9q4"
                    target="_blank"
                    className="profile-link"
                  >
                    TEDx talk
                  </a>{" "}
                  on the importance of diverse thought within a society.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Developed tech at{" "}
                  <a href="https://talem.org" target="_blank" className="profile-link">
                    Talem
                  </a>{" "}
                  to help students discover college and internship opportunities.
                </span>
              </li>
              <li className="bullet-item">
                <span className="bullet-dot" />
                <span>
                  Completed a software engineering internship at prop-tech startup{" "}
                  <a href="https://ghar-mates-web.vercel.app/" target="_blank" className="profile-link">
                    GharMates
                  </a>
                  .
                </span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </>
  );
}
