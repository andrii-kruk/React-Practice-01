import { FriendList } from './FriendList/FriendList';

import friendsData from '../data/friends.json';

export const App = () => {
  return <FriendList data={friendsData} />;
};
