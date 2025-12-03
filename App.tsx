import React from 'react';
import Hero from './components/Hero';
import AuditSection from './components/AuditSection';
import SwotAnalysis from './components/SwotAnalysis';
import StrategyFunnel from './components/StrategyFunnel';
import ActionTable from './components/ActionTable';
import GeminiAdvisor from './components/GeminiAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-white">
      {/* Navigation / Brand */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-xl tracking-tighter text-white uppercase">Digital Monkey</span>
          </div>
          <div className="text-xs text-zinc-500 font-mono">
            REF: B4C-AUDIT-2024
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        <div className="space-y-8">
          <AuditSection />
          <SwotAnalysis />
          
          <div className="bg-gradient-to-b from-black to-zinc-900">
            <StrategyFunnel />
          </div>
          
          <ActionTable />

          {/* AI Consultant Section */}
          <section className="py-16 px-4 max-w-4xl mx-auto">
            <div className="mb-8 text-center">
               <h2 className="text-2xl font-bold text-white mb-2">
                  ¿Preguntas sobre el reporte?
               </h2>
               <p className="text-zinc-400 text-sm">
                  Interactúa con el consultor virtual de Digital Monkey para profundizar en los hallazgos o generar ideas.
               </p>
            </div>
            <GeminiAdvisor />
          </section>
        </div>
      </main>

      <footer className="py-8 bg-black border-t border-zinc-800 text-center text-zinc-600 text-sm">
        <p>© 2024 Digital Monkey - Marketing Agency. Todos los derechos reservados.</p>
        <p className="mt-2 text-xs">Informe confidencial para Body4Combat.</p>
      </footer>
    </div>
  );
};

export default App;