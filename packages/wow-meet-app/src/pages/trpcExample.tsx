import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.meeting.read.useQuery({
    meetingId: "clk2i27t80000ajufx0hsc633",
  });
  console.log(data);
  const createMeeting = api.meeting.create.useMutation({
    onSuccess(data) {
      console.log(data);
    },
  });

  const createParticipant = api.paticipants.create.useMutation({
    onSuccess(data) {
      console.log(data);
    },
  });

  const updateParicipantSchedule =
    api.paticipants.updateMeetingParticipationSchedule.useMutation({
      onSuccess(data) {
        console.log(data);
      },
    });

  const handleCreate = () => {
    createMeeting.mutate({
      title: "hello",
      description: "bbbyyy",
      scheldule: {
        isPriorityOption: true,
        timeRange: [new Date(), new Date()],
        type: "day",
        dateRange: [new Date()],
        dayList: ["월", "화", "수"],
      },
      votes: [
        { title: "투표입니다.", options: ["안녕", "배고파"], type: "VOTE" },
      ],
    });
  };

  const handleCreateParticipant = () => {
    createParticipant.mutate({
      isPriority: true,
      meetingId: "clk2i27t80000ajufx0hsc633",
      name: "봉승우",
      schelduleList: [
        { date: new Date(), weight: 0 },
        { date: new Date(), weight: 0 },
      ],
      voteList: [
        { option: "안녕", voteId: "95af2e64-8c2d-4386-8a50-930efed74f70" },
        { option: "배고파", voteId: "95af2e64-8c2d-4386-8a50-930efed74f70" },
      ],
    });
  };

  const handleUpdatePartiInfo = () => {
    updateParicipantSchedule.mutate({
      meetingId: "clk2i27t80000ajufx0hsc633",
      user: { name: "봉승우" },
      schelduleList: [
        { date: new Date(), weight: 1 },
        { date: new Date(), weight: 1 },
        { date: new Date(), weight: 1 },
        { date: new Date(), weight: 0 },
        { date: new Date(), weight: 0 },
      ],
    });
  };

  return (
    <div>
      <button onClick={handleCreate}>미팅 생성</button>
      <br />
      <button onClick={handleCreateParticipant}>참여자 추가</button>
      <br />
      <button onClick={handleUpdatePartiInfo}>
        참여자 스케줄 정보 업데이트
      </button>
    </div>
  );
};

export default Home;
