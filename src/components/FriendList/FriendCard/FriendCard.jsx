import {
  Card,
  Avatar,
  Wrapper,
  Name,
  About,
  Status,
} from './FriendCard.styled';

export const FriendCard = ({ id, name, avatar, age, sex, status }) => {
  return (
    <Card key={id}>
      <Avatar src={avatar} alt="User photo" />
      <Wrapper>
        <Name>{name}</Name>
        <About>
          {sex}, {age}
        </About>
      </Wrapper>

      <Status status={status}></Status>
    </Card>
  );
};
