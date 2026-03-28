import React, { useState } from 'react';
import { questions } from '../data/questions';

interface TestScreenProps {
  onFinish: (results: string[]) => void;
}

const TestScreen: React.FC<TestScreenProps> = ({ onFinish }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    if (currentIdx < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentIdx(currentIdx + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progress = ((currentIdx + 1) / questions.length) * 100;
  const currentQuestion = questions[currentIdx];

  return (
    <div className="flex flex-col items-center min-h-[80vh] py-12 px-4 max-w-xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="w-full h-3 bg-slate-200 rounded-full mb-12 overflow-hidden shadow-inner font-bold">
        <div 
          className="h-full bg-blue-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-center mb-4 text-slate-400 font-bold uppercase tracking-widest text-sm">
        질문 {currentIdx + 1} / {questions.length}
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full mb-8 relative border-t-8 border-[#FCE7F3] min-h-[200px] flex items-center justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-slate-700 leading-snug">
          {currentQuestion.text}
        </h2>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {currentQuestion.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt.value)}
            className="w-full p-5 bg-white border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50 rounded-2xl text-lg text-slate-600 font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 text-left"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestScreen;
