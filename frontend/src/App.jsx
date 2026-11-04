import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ReadinessDashboard from './components/ReadinessDashboard.jsx';
import ResumeIntelligence from './components/ResumeIntelligence.jsx';
import SkillTesting from './components/SkillTesting.jsx';
import CodingAssessment from './components/CodingAssessment.jsx';
import MockInterview from './components/MockInterview.jsx';
import JobAnalyzer from './components/JobAnalyzer.jsx';
import AIMentor from './components/AIMentor.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <ReadinessDashboard onNavigate={setActiveTab} />;
      case 'resume':
        return <ResumeIntelligence />;
      case 'skills':
        return <SkillTesting />;
      case 'coding':
        return <CodingAssessment />;
      case 'interview':
      case 'communication':
        return <MockInterview />;
      case 'job-match':
        return <JobAnalyzer />;
      case 'mentor':
        return <AIMentor />;
      default:
        return <ReadinessDashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-950/90">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

