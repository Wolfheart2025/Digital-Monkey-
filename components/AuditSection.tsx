import React from 'react';
import { Target, Layout, MousePointerClick, FileText } from 'lucide-react';
import { AUDIT_POINTS } from '../constants';

const icons: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8" />,
  Layout: <Layout className="w-8 h-8" />,
  MousePointerClick: <MousePointerClick className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />
};

const AuditSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-green-500">01.</span> Diagnóstico Inicial
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Body4Combat tiene una base sólida y autoridad, pero existen fricciones críticas que impiden la conversión de visitantes en clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AUDIT_POINTS.map((point, index) => (
          <div 
            key={index} 
            className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-black rounded-lg text-green-500 group-hover:text-green-400 group-hover:scale-110 transition-transform">
                {icons[point.iconName]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuditSection;