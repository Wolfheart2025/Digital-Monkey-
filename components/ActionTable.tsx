import React from 'react';
import { ACTION_PLAN } from '../constants';
import { Priority } from '../types';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ActionTable: React.FC = () => {
  const getPriorityStyle = (priority: Priority) => {
    switch (priority) {
      case Priority.VeryHigh:
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case Priority.High:
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case Priority.Medium:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-zinc-700 text-zinc-300';
    }
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="text-green-500">04.</span> Foco Estratégico
        </h2>
        
        <div className="overflow-x-auto rounded-xl border border-zinc-800 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 text-zinc-200 text-sm uppercase tracking-wider">
                <th className="p-4 border-b border-zinc-800 font-semibold">Elemento</th>
                <th className="p-4 border-b border-zinc-800 font-semibold hidden md:table-cell">Situación Actual</th>
                <th className="p-4 border-b border-zinc-800 font-semibold">Prioridad</th>
                <th className="p-4 border-b border-zinc-800 font-semibold">Acción Clave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 bg-zinc-900/50">
              {ACTION_PLAN.map((item, index) => (
                <tr key={index} className="hover:bg-zinc-900/80 transition-colors group">
                  <td className="p-4 font-medium text-white group-hover:text-green-400 transition-colors">
                    {item.element}
                  </td>
                  <td className="p-4 text-zinc-400 text-sm hidden md:table-cell">
                    <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 mt-0.5 text-zinc-500 flex-shrink-0" />
                        {item.situation}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityStyle(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-200 text-sm font-medium">
                     <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                        {item.action}
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ActionTable;