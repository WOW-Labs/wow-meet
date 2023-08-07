import styled from "@emotion/styled";
import { injectAnimation } from "~/styles/animations";
import { TYPO } from "~/styles/typo";

interface Props {
  users: string[];
}

const UserList = ({ users }: Props) => {
  return (
    <Container>
      {users.map((user) => (
        <User key={user}>{user}</User>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const User = styled.span`
  ${TYPO.text3.Reg};
  color: #686868;
  opacity: 0;

  ${injectAnimation("fadeInBottomUp", "0.2s")};
`;

export default UserList;
