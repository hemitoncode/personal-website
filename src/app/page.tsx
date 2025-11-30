import Image from "next/image";
import React from "react";

export default function HemitPatel() {
  return (
    <div className="content p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hemit Patel</h1>
      <Image
        src="/hemitpatel.png"
        alt="Hemit Patel"
        width={750}
        height={750}
        className="profile-img w-40 h-40 object-cover rounded-xl mb-6"
      />

      <p className="font-bold underline">&gt; What I&apos;m currently up to:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Building <a href="https://nextvoters.com" target="_blank" className="text-blue-500 underline">Next Voters</a>, the world&apos;s first website to leverage AI to help you become a more informed voter. 
        </li>
        <br />
        <li>
          Developing the <a href="https://instagram.com/hemitoncode" target="_blank" className="text-blue-500 underline">hemitoncode</a> Instagram brand where I share bite-sized coding tutorials and AI tips for beginners.
        </li>
        <br />
        <li>
          Building a buzzer system for my school by leveraging Arduino, breadboards, and perf boards. 
        </li>
      </ul>

      <p className="font-bold underline">&gt; Interested in:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          The upholding of democratic values through making information more accessible and digestible using AI.
        </li>
        <br />
        <li>
          Teaching others how to code and leverage AI to improve their lives and careers.
        </li>
        <br />
        <li>
          Hardware tinkering, product development, and AI research.
        </li>
      </ul>

      <p className="font-bold underline">&gt; Past:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Built <a href="https://dailysat.org" target="_blank" className="text-blue-500 underline">a free SAT prep platform</a> used by thousands of students worldwide (80k+ web visitors/lifetime)
        </li>
        <br />
        <li>Did a TEDx talk on the <a href="https://www.youtube.com/watch?v=D0RVK4iU9q4" target="_blank" className="text-blue-500 underline">importance of diverse thoughts within a society</a>.</li>
        <br />
        <li>Developed tech at <a href="https://talem.org" target="_blank" className="text-blue-500 underline">Talem</a> to help students with college/internship opportunities.</li>
        <br />
        <li>Completed software engineering internship at a prop-tech startup, <a href="https://ghar-mates-web.vercel.app/" target="_blank" className="text-blue-500 underline">GharMates</a>.</li>
      </ul>
    </div>
  );
}
