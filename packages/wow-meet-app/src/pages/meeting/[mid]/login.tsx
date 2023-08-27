import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Button, EmojiContainer, Gradient, Line } from "~/components/Landing";
import Content from "~/components/Login/Content";
import TextInput from "~/components/Login/TextInput";
import Title from "~/components/Login/Title";
import { useDevice } from "~/hooks/useDevice";
import { useInfo } from "~/hooks/useInfo";
import { api } from "~/utils/api";

const Login = () => {
  const router = useRouter();
  const { data } = api.meeting.read.useQuery({
    meetingId: router.query.mid as string,
  });
  const device = useDevice();
  const { handleInfo, isAuth } = useInfo();

  const handleLogin = () => {
    const mid = router.query.mid;
    router.replace(`/meeting/${mid}`);
  };

  return (
    <Gradient>
      {device !== "MOBILE" && <EmojiContainer />}
      {data?.data.title && (
        <>
          <Title title={data?.data.title} />
          <Line />
          <Content />
          <InputWrapper>
            <TextInput
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              onChange={handleInfo}
            />
            <TextInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handleInfo}
            />
          </InputWrapper>
          <Button
            content="스케줄 조율 하러가기"
            able={isAuth()}
            onClick={handleLogin}
          />
        </>
      )}
    </Gradient>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: relative;
  z-index: 10;
`;

export default Login;
