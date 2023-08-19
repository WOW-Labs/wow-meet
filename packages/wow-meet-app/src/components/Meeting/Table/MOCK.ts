export interface ScheduleElement {
  date: string;
  weight: number;
}

export interface ParticipantSchedule {
  name: string;
  scheduleList: ScheduleElement[];
}

export const MOCK_UP_SELECTED_LIST = [
  {
    name: "봉승우",
    scheduleList: [
      { date: "월-09:00", weight: 1 },
      { date: "월-19:00", weight: 1 },
    ],
  },
  {
    name: "이준규",
    scheduleList: [
      { date: "월-09:00", weight: 1 },
      { date: "월-12:00", weight: 2 },
      { date: "월-19:00", weight: 1 },
    ],
  },
  {
    name: "권사장",
    scheduleList: [
      { date: "월-19:00", weight: 1 },
      { date: "월-19:00", weight: 1 },
      { date: "월-19:00", weight: 1 },
    ],
  },
];

export const MOCK_UP_DAY_LIST = ["월", "화", "수", "목", "금", "토", "일"];
