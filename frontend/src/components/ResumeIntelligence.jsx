import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertTriangle, Sparkles, Tag, RefreshCw } from 'lucide-react';

export default function ResumeIntelligence() {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('resume_amit_singh.pdf');

  const parsedSkills = [
    { name: 'Python', level: 'Advanced', verified: true, testsPassed: 4 },
    { name: 'React.js', level: 'Advanced', verified: true, testsPassed: 3 },
    { name: 'Node.js', level: 'Intermediate', verified: true, testsPassed: 2 },
    { name: 'FastAPI', level: 'Intermediate', verified: false, testsPassed: 0 },
    { name: 'PostgreSQL', level: 'Intermediate', verified: true, testsPassed: 1 },
    { name: 'Machine Learning', level: 'Beginner', verified: false, testsPassed: 0 },
    { name: 'Docker', level: 'Intermediate', verified: false, testsPassed: 0 },
  ];

  const missingKeywords = ['Redis', 'System Architecture', 'CI/CD Pipelines', 'Kafka', 'Unit Testing (Jest/Pytest)'];

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>Resume Intelligence & Evidence Engine</span>
            <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
              Module 1
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            NLP parses your resume, converts claims into testable skills, and tracks evidence.
          </p>
        </div>

        <label className="cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold flex items-center space-x-2 transition shadow-lg shadow-indigo-600/20">
          <UploadCloud className="w-4 h-4" />
          <span>{isUploading ? 'Parsing with AI...' : 'Upload New Resume'}</span>
          <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={handleUpload} />
        </label>
      </div>

      {/* Current Resume Metadata Card */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200">{fileName}</p>
            <p className="text-xs text-slate-400">Parsed by NLP Module (Friend 2 AI/ML Model)</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="text-slate-400">
            ATS Score: <span className="text-emerald-400 font-bold text-sm">82%</span>
          </div>
          <div className="text-slate-400">
            Skills Identified: <span className="text-indigo-400 font-bold text-sm">18</span>
          </div>
          <div className="text-slate-400">
            Evidence Verified: <span className="text-emerald-400 font-bold text-sm">9/18</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Extracted Skills Column */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4 text-indigo-400" />
              <h3 className="text-base font-semibold text-white">Extracted Skills & Verification Status</h3>
            </div>
            <span className="text-xs text-slate-400">Claims vs Demonstration</span>
          </div>

          <div className="divide-y divide-slate-800">
            {parsedSkills.map((skill) => (
              <div key={skill.name} className="py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {skill.verified ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" title="Verified through test/interview" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" title="Resume claim only - unverified" />
                  )}
                  <div>
                    <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                    <span className="ml-2 text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                    skill.verified 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {skill.verified ? `${skill.testsPassed} Tests Cleared` : 'Needs Assessment'}
                  </span>
                  {!skill.verified && (
                    <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline">
                      Verify Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing High Value Keywords */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-semibold text-white">ATS Keyword Boost</h3>
          </div>
          <p className="text-xs text-slate-400">
            Adding and verifying these skills will improve your placement match score by +18%:
          </p>

          <div className="flex flex-wrap gap-2">
            {missingKeywords.map((kw) => (
              <span 
                key={kw} 
                className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium"
              >
                + {kw}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-xs font-semibold text-slate-300 mb-2">Projects Detected in Resume:</h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li className="p-2 rounded bg-slate-800/40 border border-slate-700/50">
                <span className="font-semibold text-slate-200">E-Commerce Microservices</span>
                <p className="text-[11px] text-slate-400 mt-0.5">FastAPI, PostgreSQL, Redis</p>
              </li>
              <li className="p-2 rounded bg-slate-800/40 border border-slate-700/50">
                <span className="font-semibold text-slate-200">AI Placement Engine</span>
                <p className="text-[11px] text-slate-400 mt-0.5">React, Python, NLP</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

