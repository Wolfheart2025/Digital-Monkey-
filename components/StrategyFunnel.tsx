import React from 'react';
import { FUNNEL_STAGES } from '../constants';
import { ArrowDown } from 'lucide-react';

const StrategyFunnel: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-green-500">03.</span> Plan de Marketing (Funnel)
        </h2>
        <p className="text-zinc-400">
          Estrategia para los próximos 6-12 meses para captar, nutrir y convertir leads.
        </p>
      </div>

      <div className="relative space-y-4">
        {FUNNEL_STAGES.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Funnel Step */}
            <div 
              className={`relative z-10 w-full rounded-2xl p-6 shadow-xl transition-transform hover:scale-[1.02] ${stage.color} text-white`}
              style={{
                width: `${100 - (index * 15)}%`, // Visual funnel narrowing
                minWidth: '320px'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold uppercase tracking-widest opacity-90 mb-1">{stage.stage}</h3>
                  <h4 className="text-2xl font-bold mb-2">{stage.title}</h4>
                </div>
                <div className="flex-1 bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                    <ul className="space-y-2">
                        {stage.actions.map((action, i) => (
                            <li key={i} className="text-sm font-medium flex items-start gap-2">
                                <span>•</span> {action}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
            
            {/* Arrow Connector */}
            {index < FUNNEL_STAGES.length - 1 && (
              <div className="h-8 flex items-center justify-center text-zinc-600">
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategyFunnel;