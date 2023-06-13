import { FriendCard } from './FriendCard/FriendCard';
import { FriendContainer } from './FriendList.styled';

export const FriendList = ({ data }) => {
  return (
    <div>
      <FriendContainer>
        {data.map(({ id, name, avatar, age, sex, status }) => {
          return (
            <FriendCard
              key={id}
              name={name}
              avatar={avatar}
              age={age}
              sex={sex}
              status={status}
            />
          );
        })}
      </FriendContainer>
    </div>
  );
};
