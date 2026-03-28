import React from 'react';
import { Play } from 'lucide-react';

interface MainScreenProps {
  onStart: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 w-full text-center border-t-8 border-[#E0F2FE]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight">
          나의 <span className="text-blue-500">직장 성격 유형</span>은?
        </h1>
        <p className="text-lg text-slate-500 mb-10">
          짧은 12가지 질문을 통해 나의 직업적 성향과<br />
          환상의 궁합인 동료를 찾아보세요!
        </p>
        
        <button
          onClick={onStart}
          className="group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto mx-auto text-xl"
        >
          <Play fill="currentColor" size={24} />
          테스트 시작하기
        </button>
      </div>

      {/* SEO Section */}
      <div className="mt-16 w-full text-left bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">MBTI란 무엇인가요?</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            MBTI(Myers-Briggs Type Indicator)는 심리학자 칼 융의 심리 유형론을 바탕으로 고안된 자기 보고식 성격 유형 지표입니다. 
            사람의 성격을 4가지 상반된 지표(외향/내향, 감각/직관, 사고/감정, 판단/인식)로 나누어 총 16가지 유형으로 분류합니다.
          </p>
          <p>
            직장 생활에서 MBTI는 단순한 성격 테스트를 넘어 팀원 간의 소통 방식을 이해하고, 각자의 강점을 효율적으로 배치하는 도구로 널리 활용되고 있습니다. 
            자신의 유형을 아는 것은 업무 스트레스를 관리하고 커리어 방향을 설정하는 데 큰 도움이 됩니다.
          </p>
          <p>
            이 테스트는 '직장 환경'에 특화된 질문들로 구성되어 있어, 평소 자신의 모습과는 또 다른 '업무용 페르소나'를 발견하는 재미를 선사할 것입니다. 
            지금 바로 나의 직장 부캐를 확인해 보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
