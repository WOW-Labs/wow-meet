import styled from "@emotion/styled";
import { useAtom } from "jotai";
import DestVoteBox from "~/components/Create/DestVoteBox";
import { createAtom } from "~/store/createAtom";
import { injectAnimation } from "~/styles/animations";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import DefaultSelector from "../DefaultSelector";
import DetailLabel from "../DetailLabel";
import TextArea from "../TextArea";

const SecondSection = () => {
  const [body, setBody] = useAtom(createAtom);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;
    setBody((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const SecondConfigs = [
    {
      title: "모임 안내문구 작성",
      description:
        "모임 설명, 진행 시 일정안내, 공지사항, 웹사이트 링크 등을 적어보아요.",
      inner: (
        <TextArea
          rows={5}
          placeholder="여기를 눌러 모임 안내문구를 입력해주세요."
          name="description"
          value={body?.description || ""}
          onChange={handleChange}
        />
      ),
    },
    // {
    //   title: "후보 시간 범위설정",
    //   inner: <TimeSelector />,
    // },
    // {
    //   title: "선호일정 선택 제도",
    //   description:
    //     "스케줄 체크 시에 선호일정을 설정해 가중치를 부여할 수 있어요.",
    //   inner: <DefaultSelector />,
    // },
    {
      title: "장소 투표",
      inner: <DefaultSelector AdditionalComponent={<DestVoteBox />} />,
    },
    // {
    //   title: "기타 투표",
    //   inner: <DefaultSelector AdditionalComponent={<PlusVoteBox />} />,
    // },
  ];

  return (
    <Container css={injectAnimation("fadeIn")}>
      <Title>{`우리모임을 더 다채롭게!\n추가정보를 입력해주세요 :)`}</Title>
      {SecondConfigs.map(DetailLabel)}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;

  padding: 0rem 3rem 5rem 3rem;
  ${mq[4]} {
    padding: 0rem 1rem 3rem 1rem;
  }
`;

const Title = styled.span`
  ${TYPO.title2.Bd};
  white-space: pre-line;
  position: relative;
  text-align: center;
  width: 100%;
  color: ${COLORS.grey900};

  animation: ${injectAnimation("fadeInTopDown", "1s")};
`;

export default SecondSection;
