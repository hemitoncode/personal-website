import Image from "next/image";
import React from "react";

export default function HemitPatel() {
  return (
    <div className="content p-8 max-w-5xl mx-auto text-lg">
      <h1 className="text-5xl font-bold mb-6">Hemit Patel</h1>
      <Image
        src="/hemitpatel.png"
        alt="Hemit Patel"
        width={1000}
        height={1000}
        className="profile-img w-64 h-64 object-cover rounded-xl mb-8"
      />

      <p className="font-bold underline text-2xl mb-4">&gt; What I&apos;m currently up to:</p>
      <ul className="list-disc ml-10 mb-8 space-y-4 text-lg">
        <li>
          Building <a href="https://nextvoters.com" target="_blank" className="text-blue-500 underline">Next Voters</a>, the world&apos;s first website to leverage AI to help you become a more informed voter. 
        </li>
        <li>
          Developing the <a href="https://instagram.com/hemitoncode" target="_blank" className="text-blue-500 underline">hemitoncode</a> Instagram brand where I share bite-sized coding tutorials and AI tips for beginners.
        </li>
        <li>
          Building a <a href="https://github.com/hemitoncode/buzzer-game" target="_blank" className="text-blue-500 underline">buzzer system</a> for my school by leveraging Arduino, breadboards, and perf boards. 
        </li>
      </ul>

      <p className="font-bold underline text-2xl mb-4">&gt; Interested in:</p>
      <ul className="list-disc ml-10 mb-8 space-y-4 text-lg">
        <li>
          The upholding of democratic values through making information more accessible and digestible using AI.
        </li>
        <li>
          Teaching others how to code and leverage AI to improve their lives and careers.
        </li>
        <li>
          Hardware tinkering, product development, and AI research.
        </li>
      </ul>

      <p className="font-bold underline text-2xl mb-4">&gt; Past:</p>
      <ul className="list-disc ml-10 mb-8 space-y-4 text-lg">
        <li>
          Built <a href="https://dailysat.org" target="_blank" className="text-blue-500 underline">a free SAT prep platform</a> used by thousands of students worldwide (80k+ web visitors/lifetime)
        </li>
        <li>
          Did a TEDx talk on the <a href="https://www.youtube.com/watch?v=D0RVK4iU9q4" target="_blank" className="text-blue-500 underline">importance of diverse thoughts within a society</a>.
        </li>
        <li>
          Developed tech at <a href="https://talem.org" target="_blank" className="text-blue-500 underline">Talem</a> to help students with college/internship opportunities.
        </li>
        <li>
          Completed software engineering internship at a prop-tech startup, <a href="https://ghar-mates-web.vercel.app/" target="_blank" className="text-blue-500 underline">GharMates</a>.
        </li>
      </ul>
    </div>
  );
}
