import React from 'react';
import { SWOT_DATA } from '../constants';
import { ShieldCheck, AlertTriangle, TrendingUp, ShieldAlert } from 'lucide-react';

const SwotAnalysis: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Strengths': return <ShieldCheck className="w-6 h-6 text-green-400" />;
      case 'Weaknesses': return <AlertTriangle className="w-6 h-6 text-red-400" />;
      case 'Opportunities': return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'Threats': return <ShieldAlert className="w-6 h-6 text-orange-400" />;
      default: return null;
    }
  };

  const getLabel = (category: string) => {
      switch(category) {
          case 'Strengths': return 'Fortalezas';
          case 'Weaknesses': return 'Debilidades';
          case 'Opportunities': return 'Oportunidades';
          case 'Threats': return 'Amenazas';
          default: return category;
      }
  };

  const getBorderColor = (category: string) => {
    switch(category) {
        case 'Strengths': return 'border-green-500/30 hover:border-green-500';
        case 'Weaknesses': return 'border-red-500/30 hover:border-red-500';
        case 'Opportunities': return 'border-blue-500/30 hover:border-blue-500';
        case 'Threats': return 'border-orange-500/30 hover:border-orange-500';
        default: return 'border-zinc-700';
    }
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          <span className="text-green-500">02.</span> Análisis DAFO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SWOT_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`bg-zinc-900 rounded-xl p-6 border transition-all duration-300 ${getBorderColor(item.category)}`}
            >
              <div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-3">
                {getIcon(item.category)}
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  {getLabel(item.category)}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-zinc-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwotAnalysis;