import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  CheckCircle2, 
  Code2, 
  Video, 
  Mic2, 
  Briefcase, 
  Bot, 
  GitBranch
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Readiness Dashboard', icon: LayoutDashboard, badge: 'Overview' },
  { id: 'resume', label: 'Resume Intelligence', icon: FileText, badge: 'NLP' },
  { id: 'skills', label: 'Adaptive Skill Test', icon: CheckCircle2, badge: 'Adaptive' },
  { id: 'coding', label: 'Practical Coding', icon: Code2, badge: 'Judge' },
  { id: 'interview', label: 'AI Mock Interview', icon: Video, badge: 'Live AI' },
  { id: 'communication', label: 'Speech & Presentation', icon: Mic2, badge: 'Speech' },
  { id: 'job-match', label: 'Job Description Match', icon: Briefcase, badge: 'JD Gap' },
  { id: 'mentor', label: 'AI Mentor & Guidance', icon: Bot, badge: 'GenAI' },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        <div>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Modules
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300 mb-1">
            <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
            <span>Team Collaboration</span>
          </div>
          <div className="text-[11px] text-slate-400 space-y-1 font-mono">
            <p className="text-emerald-400 font-bold">• You: Frontend (React)</p>
            <p>• Friend 1: Backend (APIs)</p>
            <p>• Friend 2: AI / ML</p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 text-center">
        <p className="text-[11px] text-slate-500 font-mono">
          SkillPilot AI © 2026
        </p>
      </div>
    </aside>
  );
}

