import { useState } from 'react';
import MainScreen from './components/MainScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';
import { getMBTIResult } from './utils/mbti';

type Step = 'MAIN' | 'TEST' | 'RESULT';

function App() {
  const [step, setStep] = useState<Step>('MAIN');
  const [mbtiResult, setMbtiResult] = useState<string>('');

  const handleStart = () => {
    setStep('TEST');
  };

  const handleFinish = (answers: string[]) => {
    const result = getMBTIResult(answers);
    setMbtiResult(result);
    setStep('RESULT');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setStep('MAIN');
    setMbtiResult('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="py-4 px-4 bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black text-blue-500 tracking-tighter cursor-pointer" onClick={handleReset}>
            WORKER<span className="text-slate-700">TEST</span>
          </span>
          <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-400">
            직장 MBTI 테스트
          </div>
        </div>
      </header>
      
      <main className="container mx-auto pb-20">
        {step === 'MAIN' && <MainScreen onStart={handleStart} />}
        {step === 'TEST' && <TestScreen onFinish={handleFinish} />}
        {step === 'RESULT' && <ResultScreen mbti={mbtiResult} onReset={handleReset} />}
      </main>

      <footer className="py-10 text-center text-slate-400 border-t border-slate-100 bg-white">
        <p className="font-bold text-sm mb-2 text-slate-600">© 2026 직장 성격 유형 연구소</p>
        <p className="text-xs px-10">이 테스트는 재미로 보는 것이며 과학적 근거와 다를 수 있습니다.<br />모든 권리는 '항중력(Antigravity)'에게 있습니다.</p>
      </footer>
    </div>
  );
}

export default App;
