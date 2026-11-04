import React from 'react';
import { 
  TrendingUp, 
  Award, 
  Target, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle,
  FileCheck,
  BrainCircuit,
  MessageSquare
} from 'lucide-react';

export default function ReadinessDashboard({ onNavigate }) {
  const readinessScore = 74;

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/60 via-slate-900/80 to-purple-900/40 border border-indigo-500/20 p-6 md:p-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Placement Readiness Index: High Potential</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Placement Readiness: <span className="text-indigo-400">{readinessScore}%</span>
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Your evidence-based student profile is continuously evaluated across your Resume, Coding Tests, AI Interviews, and Job Market alignment.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button 
              onClick={() => onNavigate('resume')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/30 flex items-center space-x-2 transition"
            >
              <span>Upload / Re-evaluate Resume</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('interview')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-sm font-semibold flex items-center space-x-2 transition"
            >
              <span>Take AI Mock Interview</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Resume ATS</span>
            <FileCheck className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">82/100</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full rounded-full" style={{ width: '82%' }} />
          </div>
          <p className="text-xs text-slate-400 mt-2">14 Technical Skills verified</p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Coding Benchmark</span>
            <BrainCircuit className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">70/100</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '70%' }} />
          </div>
          <p className="text-xs text-slate-400 mt-2">DSA: Medium • Arrays/Trees</p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Mock Viva</span>
            <MessageSquare className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">68/100</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full rounded-full" style={{ width: '68%' }} />
          </div>
          <p className="text-xs text-slate-400 mt-2">Confidence: High • Clarity: Good</p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Target Job Fit</span>
            <Target className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">76%</div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full" style={{ width: '76%' }} />
          </div>
          <p className="text-xs text-slate-400 mt-2">Role: SDE-1 / Full Stack</p>
        </div>
      </div>

      {/* Two Column Layout: Identified Skill Gaps & Recommended Next Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Identified Gaps */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Detected Skill Gaps & Pain Points</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              <span className="font-semibold block mb-0.5 text-amber-300">System Design Fundamentals</span>
              Your resume mentions microservices, but live mock viva score was 52% on caching and message queues.
            </div>
            <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
              <span className="font-semibold block mb-0.5 text-indigo-300">Dynamic Programming (DP)</span>
              Target Tier-1 company coding assessments require DP pattern mastery (Currently 1/4 tests cleared).
            </div>
            <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200">
              <span className="font-semibold block mb-0.5 text-purple-300">STAR Method in HR Round</span>
              Communication analyzer detected lack of quantifiable metrics in behavioral interview responses.
            </div>
          </div>
        </div>

        {/* Next Best Actions */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Personalized Next Actions (AI Coach)</h2>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => onNavigate('coding')}
              className="w-full text-left p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 transition group flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300">
                  1. Solve: 3 Tree & Graph Coding Problems
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Estimated time: 45 mins • Boost readiness +4%</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition" />
            </button>

            <button 
              onClick={() => onNavigate('interview')}
              className="w-full text-left p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 transition group flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300">
                  2. AI Mock Interview: Project Architecture Viva
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Estimated time: 15 mins • Validate resume claims</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition" />
            </button>

            <button 
              onClick={() => onNavigate('job-match')}
              className="w-full text-left p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 transition group flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300">
                  3. Compare Resume against SDE Job Description
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Paste target job role & find missing keywords</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

