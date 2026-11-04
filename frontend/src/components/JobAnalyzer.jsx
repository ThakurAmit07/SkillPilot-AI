import React, { useState } from 'react';
import { Briefcase, Target, Search, CheckCircle, XCircle, ArrowUpRight, Zap } from 'lucide-react';

const sampleJD = `Role: Software Development Engineer 1 (Full Stack)
Requirements:
- Strong proficiency in Python or Java, and React.js / modern frontend frameworks.
- Understanding of Relational Databases (PostgreSQL/MySQL) and caching (Redis).
- Hands-on experience with RESTful APIs, Git, and Docker containerization.
- Solid knowledge of Data Structures, Algorithms, and Object-Oriented Design.
- Good communication and teamwork skills.`;

export default function JobAnalyzer() {
  const [jdText, setJdText] = useState(sampleJD);
  const [analyzed, setAnalyzed] = useState(true);

  const matchedSkills = [
    { skill: 'Python', importance: 'Critical', match: true },
    { skill: 'React.js', importance: 'Critical', match: true },
    { skill: 'PostgreSQL', importance: 'High', match: true },
    { skill: 'Data Structures & Algorithms', importance: 'Critical', match: true },
    { skill: 'RESTful APIs', importance: 'High', match: true },
  ];

  const gapSkills = [
    { skill: 'Redis Caching', importance: 'High', gapReason: 'Not verified in coding/viva', solution: 'Complete Module 2 Redis Quiz' },
    { skill: 'Docker Containerization', importance: 'Medium', gapReason: 'No docker compose in projects', solution: 'Add Dockerfile to project' },
    { skill: 'System Design Basics', importance: 'Medium', gapReason: 'Viva score below 60%', solution: 'Take Mock Architecture Viva' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white flex items-center space-x-2">
          <span>Job Description (JD) Gap Analyzer</span>
          <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
            Module 8
          </span>
        </h2>
        <p className="text-slate-400 text-sm">
          Paste any job description to instantly see your readiness percentage and exact missing skills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: JD Input */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Target Job Description
              </label>
              <button 
                onClick={() => setJdText(sampleJD)}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline"
              >
                Reset Sample JD
              </button>
            </div>

            <textarea
              rows={10}
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              className="w-full bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 resize-none font-mono leading-relaxed"
              placeholder="Paste job description requirements here..."
            />

            <button
              onClick={() => setAnalyzed(true)}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 transition shadow-lg shadow-indigo-600/20"
            >
              <Search className="w-4 h-4" />
              <span>Run AI JD Matching</span>
            </button>
          </div>
        </div>

        {/* Right Column: Matching Results & Skill Gaps */}
        <div className="lg:col-span-7 space-y-6">
          {/* Match Score Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                JD Alignment Match
              </p>
              <h3 className="text-3xl font-extrabold text-white">
                78% <span className="text-sm font-medium text-emerald-400 ml-1">Qualified for Interview</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                You match 5 out of 8 required criteria for this role.
              </p>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Target className="w-10 h-10" />
            </div>
          </div>

          {/* Missing Skills / Gaps */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Identified Gaps to Reach 95%+ Fit</span>
            </h4>

            <div className="space-y-3">
              {gapSkills.map((gap, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">{gap.skill}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                        {gap.importance}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 ml-6 mt-0.5">{gap.gapReason}</p>
                  </div>

                  <button className="self-end sm:self-center px-3 py-1 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg text-xs font-semibold flex items-center space-x-1 shrink-0 transition">
                    <span>{gap.solution}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

