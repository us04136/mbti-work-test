export interface Question {
  id: number;
  indicator: 'EI' | 'SN' | 'TF' | 'JP';
  text: string;
  options: {
    text: string;
    value: string;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    indicator: 'EI',
    text: "주말에 출근했다면, 점심시간에 당신은?",
    options: [
      { text: "동료들과 북적거리며 맛집에 간다", value: "E" },
      { text: "혼자 조용히 샌드위치를 먹으며 쉰다", value: "I" }
    ]
  },
  {
    id: 2,
    indicator: 'EI',
    text: "회의 시간에 당신의 모습은?",
    options: [
      { text: "의견을 적극적으로 내며 분위기를 주도한다", value: "E" },
      { text: "충분히 경청한 뒤 정리된 의견을 말한다", value: "I" }
    ]
  },
  {
    id: 3,
    indicator: 'EI',
    text: "업무 중 스트레스를 받았을 때 해소법은?",
    options: [
      { text: "퇴근 후 친구들과 술 한잔하며 수다를 떤다", value: "E" },
      { text: "집에서 좋아하는 영화나 게임을 하며 혼자 쉰다", value: "I" }
    ]
  },
  {
    id: 4,
    indicator: 'SN',
    text: "상사가 '이거 대충 어떻게 돌아가는 건가요?'라고 물으면?",
    options: [
      { text: "현재 진행 상황을 단계별로 사실에 입각해 보고한다", value: "S" },
      { text: "전체적인 핵심 방향과 미래의 가능성을 위주로 보고한다", value: "N" }
    ]
  },
  {
    id: 5,
    indicator: 'SN',
    text: "일할 때 당신이 선호하는 방식은?",
    options: [
      { text: "매뉴얼과 과거 사례가 있는 확실한 방식", value: "S" },
      { text: "끊임없이 새로운 시도를 하는 창의적인 방식", value: "N" }
    ]
  },
  {
    id: 6,
    indicator: 'SN',
    text: "새로운 업무를 배울 때 당신은?",
    options: [
      { text: "하나하나 꼼꼼하게 실전으로 익히는 편", value: "S" },
      { text: "전체적인 원리와 흐름을 먼저 이해하는 편", value: "N" }
    ]
  },
  {
    id: 7,
    indicator: 'TF',
    text: "동료가 업무 실수로 속상해하고 있다면?",
    options: [
      { text: "\"어디서 실수가 났는지 빨리 찾아보자\" (해결책 제시)", value: "T" },
      { text: "\"진짜 속상하겠다, 고생 많았어\" (정서적 공감)", value: "F" }
    ]
  },
  {
    id: 8,
    indicator: 'TF',
    text: "피드백을 주고받을 때 더 중요하게 생각하는 것은?",
    options: [
      { text: "일의 효율성과 논리적인 타당성", value: "T" },
      { text: "함께 일하는 사람들의 기분과 관계", value: "F" }
    ]
  },
  {
    id: 9,
    indicator: 'TF',
    text: "성과 평가 면담에서 듣고 싶은 말은?",
    options: [
      { text: "\"당신은 정말 유능하고 분석적이에요\"", value: "T" },
      { text: "\"당신이 있어서 우리 팀 분위기가 정말 좋아요\"", value: "F" }
    ]
  },
  {
    id: 10,
    indicator: 'JP',
    text: "프로젝트 마감 기한이 다가오면 당신은?",
    options: [
      { text: "미리 계획을 세워 여유 있게 마무리한다", value: "J" },
      { text: "막판 스퍼트를 내며 몰입해서 끝낸다", value: "P" }
    ]
  },
  {
    id: 11,
    indicator: 'JP',
    text: "내일 출근해서 해야 할 일을 생각할 때",
    options: [
      { text: "체크리스트를 만들고 순서대로 정리한다", value: "J" },
      { text: "그때그때 상황에 맞춰 유연하게 처리하려 한다", value: "P" }
    ]
  },
  {
    id: 12,
    indicator: 'JP',
    text: "책상 정리 상태는 보통 어떤가요?",
    options: [
      { text: "필기구와 서류가 제자리에 정돈된 상태", value: "J" },
      { text: "자유분방하게 놓여 있지만 나름의 질서가 있는 상태", value: "P" }
    ]
  }
];
