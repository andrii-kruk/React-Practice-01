import PropTypes from 'prop-types';

import {
  Card,
  Avatar,
  Wrapper,
  Name,
  About,
  Status,
} from './FriendCard.styled';

export const FriendCard = () => {
  return (
    <Card>
      <Avatar
        src="https://img.freepik.com/premium-vector/cool-man-profile-photo-icon-profile-icon-male-head-face-flat-design-vector-illustration_750364-393.jpg"
        alt=""
      />
      <Wrapper>
        <Name>Christian Bale</Name>
        <About>Male, 38</About>
      </Wrapper>

      <Status></Status>
    </Card>
  );
};
