// 모집중 | 모집완료 | 스터디 진행 중 | 스터디 완료
export type StudyStatusType =
  | 'recruiting'
  | 'recruitingFinished'
  | 'inProgress'
  | 'finished';

export interface StudyType {
  id: string;
  name: string;
  thumbnail: string;
  currentParticipant: number;
  maxParticipant: number;
  gatherStartDate: string;
  gatherEndDate: string;
  studyStartDate: string;
  studyEndDate: string;
  description: string;
  status: StudyStatusType;
}

export const dummyStudy: StudyType = {
  id: '12345',
  name: '이건 스터디 이름',
  thumbnail:
    'https://shopping-phinf.pstatic.net/main_3249610/32496107738.20221019123923.jpg',
  currentParticipant: 1,
  maxParticipant: 10,
  gatherStartDate: '2022 / 11 / 01',
  gatherEndDate: '2022/11/28',
  studyStartDate: '2022/12/01',
  studyEndDate: '2022/12/28',
  description: '이건 스터디에 대한 설명입니다.',
  status: 'recruiting',
};
