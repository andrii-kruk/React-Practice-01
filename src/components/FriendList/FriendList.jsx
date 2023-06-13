import PropTypes from 'prop-types';

import { FriendCard } from './FriendCard/FriendCard';
import { FriendContainer } from './FriendList.styled';

export const FriendList = () => {
  return (
    <div>
      <FriendContainer>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </FriendContainer>
    </div>
  );
};
