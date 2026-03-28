import React from 'react';
import { results } from '../data/results';
import { Share2, RotateCcw, ThumbsUp, ThumbsDown } from 'lucide-react';
import AdSenseComponent from './AdSenseComponent';

interface ResultScreenProps {
  mbti: string;
  onReset: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ mbti, onReset }) => {
  const result = results[mbti];

  if (!result) return <div>결과를 불러오는 중...</div>;

  return (
    <div className="flex flex-col items-center py-12 px-4 max-w-3xl mx-auto w-full animate-in fade-in duration-700">
      {/* Ad Placeholder Top */}
      <AdSenseComponent slot="1485514936" />

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full border-t-8 border-[#F3E8FF] text-center mb-8">
        <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full font-bold text-sm mb-4">
          당신의 직장 성격 유형은?
        </div>
        <h1 className="text-5xl font-black text-slate-100 uppercase italic tracking-tighter mix-blend-difference mb-2">
          {result.type}
        </h1>
        <h2 className="text-3xl font-bold text-slate-700 mb-8 underline decoration-purple-400 decoration-8 underline-offset-4">
          {result.name}
        </h2>

        {/* Detailed Description */}
        <div 
          className="text-left bg-slate-50 p-6 md:p-10 rounded-2xl mb-8 border border-slate-100 text-slate-600 leading-relaxed result-content space-y-4" 
          dangerouslySetInnerHTML={{ __html: result.description }} 
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="flex items-center gap-2 font-bold text-blue-700 mb-4 text-lg">
              <ThumbsUp size={20} /> 주요 특징 및 장점
            </h3>
            <ul className="space-y-3 text-blue-600 font-medium">
              {result.features.concat(result.strengths).slice(0, 4).map((item, i) => (
                <li key={i} className="flex gap-2">
                   <span className="text-blue-300">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100">
            <h3 className="flex items-center gap-2 font-bold text-pink-700 mb-4 text-lg">
              <ThumbsDown size={20} /> 주의할 점 (단점)
            </h3>
            <ul className="space-y-3 text-pink-600 font-medium">
              {result.weaknesses.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-pink-300">✘</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-10 text-left">
          <h3 className="font-bold text-slate-700 mb-4 text-xl">🚀 추천 직업군</h3>
          <div className="flex flex-wrap gap-2 text-slate-800">
            {result.jobs.map((job, i) => (
              <span key={i} className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-bold border border-slate-300">
                #{job}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-[#DCFCE7] text-green-800 border-2 border-green-200 transition-transform hover:scale-105">
            <div className="text-xs font-bold uppercase mb-1 opacity-60">환상의 궁합</div>
            <div className="text-xl font-bold">{result.bestMatch}</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FCE7F3] text-pink-800 border-2 border-pink-200 transition-transform hover:scale-105">
            <div className="text-xs font-bold uppercase mb-1 opacity-60">환장의 파트너</div>
            <div className="text-xl font-bold">{result.worstMatch}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-5 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-95 text-lg">
            <Share2 size={22} /> 결과 공유하기
          </button>
          <button 
            onClick={onReset}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-5 rounded-2xl transition-all border border-slate-200 active:scale-95 text-lg"
          >
            <RotateCcw size={22} /> 다시 테스트하기
          </button>
        </div>
      </div>

       {/* Ad Placeholder Bottom */}
       <AdSenseComponent slot="1485514936" />
    </div>
  );
};

export default ResultScreen;
